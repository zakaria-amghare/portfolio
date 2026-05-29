import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const ALL_SKILLS = [
  { name: 'Databases & Data Modeling', level: 95, color: '#61DAFB', icon: '🗃️', description: 'Designing and optimizing relational and NoSQL databases for scalable applications.' },
  { name: 'Web Design',                level: 92, color: '#F7DF1E', icon: '🎨', description: 'Creating responsive, user-friendly interfaces with HTML, CSS, and design tools.' },
  { name: 'Backend Development',       level: 88, color: '#339933', icon: '🔧', description: 'Building and maintaining server-side logic, APIs, and databases.' },
  { name: 'Data Encryption',           level: 85, color: '#3776AB', icon: '🔐', description: 'Implementing secure algorithms to protect sensitive data in transit and at rest.' },
  { name: 'Mobile App Development',    level: 90, color: '#1572B6', icon: '📱', description: 'Developing cross-platform mobile applications with smooth UX and performance.' },
  { name: 'Text-Based Game Dev',       level: 82, color: '#47A248', icon: '🎮', description: 'Crafting interactive stories and logic-driven games in a terminal or console.' },
  { name: 'Game Development',          level: 87, color: '#E34F26', icon: '🚀', description: 'Creating 2D/3D games with engines and frameworks like Unity or Godot.' },
  { name: 'Git & GitHub',              level: 89, color: '#F05032', icon: '🗂️', description: 'Version control, branching, and collaboration using Git and GitHub.' },
  { name: 'AI Prompt Engineering',     level: 78, color: '#2496ED', icon: '🧠', description: 'Designing effective prompts to guide large language models for accurate outputs.' },
  { name: 'Excel Mastery',             level: 75, color: '#FF9900', icon: '📊', description: 'Advanced formulas, data visualization, and automation with spreadsheets.' },
  { name: 'Network Administration',    level: 83, color: '#3178C6', icon: '🌐', description: 'Managing and troubleshooting local and cloud-based networks.' },
  { name: 'Tutorial Creation',         level: 80, color: '#4FC08D', icon: '🎥', description: 'Producing clear and engaging technical tutorials and learning resources.' },
  { name: 'Presentation Design',       level: 85, color: '#764ABC', icon: '🖼️', description: 'Building impactful slide decks for lectures, demos, and public speaking.' },
  { name: 'GraphQL',                   level: 77, color: '#E10098', icon: '📡', description: 'Building efficient, flexible APIs and managing data with GraphQL schemas.' },
  { name: 'Figma & UI Design',         level: 88, color: '#F24E1E', icon: '🖌️', description: 'Designing intuitive interfaces and prototypes using Figma.' },
];

const Skills = () => {
  const [displayedSkills, setDisplayedSkills] = useState(ALL_SKILLS);
  const [spinning, setSpinning] = useState(false);
  const [lockedCells, setLockedCells] = useState(Array(15).fill(true));
  const [hoveredCell, setHoveredCell] = useState(null);
  const [winner, setWinner] = useState(null);
  const intervalRef = useRef(null);
  const lockTimersRef = useRef([]);

  const spinRoulette = () => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);
    setLockedCells(Array(15).fill(false)); // all cells spinning

    // Shuffle displayed skills rapidly
    intervalRef.current = setInterval(() => {
      setDisplayedSkills(prev => {
        const shuffled = [...prev];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 80);

    // Lock cells one by one with stagger — like slot machine reels stopping
    const finalOrder = [...ALL_SKILLS].sort(() => Math.random() - 0.5);

    lockTimersRef.current = [];
    for (let i = 0; i < 15; i++) {
      const t = setTimeout(() => {
        setLockedCells(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        setDisplayedSkills(prev => {
          const next = [...prev];
          next[i] = finalOrder[i];
          return next;
        });

        // Last cell locks — stop everything
        if (i === 14) {
          clearInterval(intervalRef.current);
          setSpinning(false);
          // Pick a random "winner" cell to highlight
          const winnerIdx = Math.floor(Math.random() * 15);
          setWinner(winnerIdx);
        }
      }, 600 + i * 180); // stagger: 600ms base + 180ms per cell
      lockTimersRef.current.push(t);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      lockTimersRef.current.forEach(t => clearTimeout(t));
    };
  }, []);

  return (
    <div className="roulette-container" id="skills-section">
      <div className="header-section">
        <h2 className={`main-title ${spinning ? 'title-spinning' : ''}`}>
          🎰 SKILLS ROULETTE 🎰
        </h2>
        <p className="subtitle">Place Your Bets on Excellence!</p>
        <div
          className={`spin-button ${spinning ? 'spinning' : ''}`}
          onClick={spinRoulette}
        >
          {spinning ? '🎲 Spinning...' : '🎲 SPIN THE WHEEL 🎲'}
        </div>
      </div>

      <div className="roulette-grid">
        {displayedSkills.map((skill, index) => {
          const isLocked = lockedCells[index];
          const isWinner = winner === index;
          return (
            <div
              key={index}
              onMouseEnter={() => !spinning && setHoveredCell(index)}
              onMouseLeave={() => setHoveredCell(null)}
              className={`skill-cell 
                ${!isLocked ? 'cell-spinning' : ''} 
                ${isWinner ? 'cell-winner' : ''} 
                ${hoveredCell === index ? 'hovered' : ''}
              `}
            >
              <div className={`roulette-number ${index % 2 === 0 ? 'red' : 'black'}`}>
                {index + 1}
              </div>

              <div className={`skill-icon ${!isLocked ? 'icon-blur' : ''}`}>
                {skill.icon}
              </div>

              <div className={`skill-name ${!isLocked ? 'text-blur' : ''}`}>
                {skill.name}
              </div>

              <div className="skill-level-container">
                <div
                  className="skill-level-bar"
                  style={{
                    width: isLocked ? `${skill.level}%` : '60%',
                    backgroundColor: skill.color,
                    transition: isLocked ? 'width 0.6s ease' : 'none',
                  }}
                />
              </div>

              <div className={`skill-percentage ${!isLocked ? 'text-blur' : ''}`}>
                {skill.level}%
              </div>

              {hoveredCell === index && isLocked && (
                <div className="skill-description">{skill.description}</div>
              )}

              {isWinner && (
                <div className="winner-badge">🏆 JACKPOT!</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="footer-message">
        🎪 <span className="winner-text">Winner takes all!</span> Every skill is a <span className="jackpot-text">jackpot</span>! 🎪
      </div>
    </div>
  );
};

export default Skills;
