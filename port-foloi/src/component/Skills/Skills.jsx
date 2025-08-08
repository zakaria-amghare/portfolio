import React, { useState } from 'react';
import './RouletteSkillsBoard.css';

const RouletteSkillsBoard = () => {
  const [spinning, setSpinning] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null);

  // 15 skills for 5x3 grid
 const skills = [
  {
    name: 'Databases & Data Modeling',
    level: 95,
    color: '#61DAFB',
    icon: '🗃️',
    description: 'Designing and optimizing relational and NoSQL databases for scalable applications.',
  },
  {
    name: 'Web Design',
    level: 92,
    color: '#F7DF1E',
    icon: '🎨',
    description: 'Creating responsive, user-friendly interfaces with HTML, CSS, and design tools.',
  },
  {
    name: 'Backend Development',
    level: 88,
    color: '#339933',
    icon: '🔧',
    description: 'Building and maintaining server-side logic, APIs, and databases.',
  },
  {
    name: 'Data Encryption',
    level: 85,
    color: '#3776AB',
    icon: '🔐',
    description: 'Implementing secure algorithms to protect sensitive data in transit and at rest.',
  },
  {
    name: 'Mobile App Development',
    level: 90,
    color: '#1572B6',
    icon: '📱',
    description: 'Developing cross-platform mobile applications with smooth UX and performance.',
  },
  {
    name: 'Text-Based Game Development',
    level: 82,
    color: '#47A248',
    icon: '🎮',
    description: 'Crafting interactive stories and logic-driven games in a terminal or console.',
  },
  {
    name: 'Game Development',
    level: 87,
    color: '#000000',
    icon: '🚀',
    description: 'Creating 2D/3D games with engines and frameworks like Unity or Godot.',
  },
  {
    name: 'Git & GitHub',
    level: 89,
    color: '#F05032',
    icon: '🗂️',
    description: 'Version control, branching, and collaboration using Git and GitHub.',
  },
  {
    name: 'AI Prompt Engineering',
    level: 78,
    color: '#2496ED',
    icon: '🧠',
    description: 'Designing effective prompts to guide large language models for accurate outputs.',
  },
  {
    name: 'Excel Mastery',
    level: 75,
    color: '#FF9900',
    icon: '📊',
    description: 'Advanced formulas, data visualization, and automation with spreadsheets.',
  },
  {
    name: 'Network Administration',
    level: 83,
    color: '#3178C6',
    icon: '🌐',
    description: 'Managing and troubleshooting local and cloud-based networks.',
  },
  {
    name: 'Tutorial Creation',
    level: 80,
    color: '#4FC08D',
    icon: '🎥',
    description: 'Producing clear and engaging technical tutorials and learning resources.',
  },
  {
    name: 'Presentation Design',
    level: 85,
    color: '#764ABC',
    icon: '🖼️',
    description: 'Building impactful slide decks for lectures, demos, and public speaking.',
  },
  {
    name: 'GraphQL',
    level: 77,
    color: '#E10098',
    icon: '📡',
    description: 'Building efficient, flexible APIs and managing data with GraphQL schemas.',
  },
  {
    name: 'Figma & UI Design',
    level: 88,
    color: '#F24E1E',
    icon: '🖌️',
    description: 'Designing intuitive interfaces and prototypes using Figma.',
  }
];



   const spinRoulette = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 3000);
  };

  const handleButtonMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = `
      0 0 50px rgba(255, 215, 0, 0.4),
      0 10px 30px rgba(220, 20, 60, 0.2),
      inset 0 0 30px rgba(255, 255, 255, 0.2)
    `;
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = `
      0 0 30px rgba(255, 215, 0, 0.3),
      inset 0 0 20px rgba(255, 255, 255, 0.1)
    `;
  };

  return (
    <div className="roulette-container">
      <div className="disclamer">
        <h1 className='diclamer-header'>
          check my skills and hold your bets 
        </h1>
        <p className='diclamer-expalination'>
          select a number and trough the dice
        </p>
      </div>
      
          <div className="header-section">
            {/* Main Title */}
            <h1 className={`main-title ${spinning ? 'title-spinning' : ''}`}>
              🎰 SKILLS ROULETTE 🎰
              <span className="title-icon">🎪</span>
            </h1>

            {/* Subtitle */}
            <div className="subtitle">
              Place Your Bets on Excellence!
            </div>

            {/* Spin Button */}
            <div 
              onClick={spinRoulette}
              className="spin-button"
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              🎲 SPIN THE WHEEL 🎲
              <div className={`button-shine ${spinning ? 'shining' : ''}`} />
            </div>
          </div>

          {/* Roulette Grid */}
          <div className="roulette-grid">
            {/* Roulette Outer Ring */}
            <div className={`outer-ring ${spinning ? 'ring-spinning' : ''}`} />

            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCell(index)}
                onMouseLeave={() => setHoveredCell(null)}
                className={`skill-cell ${hoveredCell === index ? 'hovered' : ''} ${spinning ? 'cell-spinning' : ''}`}
                style={{
                  transform: spinning 
                    ? `rotate(${720 * Math.random()}deg) scale(0.9)` 
                    : hoveredCell === index 
                      ? 'scale(1.1) translateY(-5px)' 
                      : 'scale(1)'
                }}
              >
                {/* Roulette Number */}
                <div className={`roulette-number ${index % 2 === 0 ? 'red' : 'black'}`}>
                  {index + 1}
                </div>

                {/* Skill Icon */}
                <div className={`skill-icon ${spinning ? 'icon-spinning' : ''} ${hoveredCell === index ? 'icon-bouncing' : ''}`}>
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <div className={`skill-name ${hoveredCell === index ? 'name-glowing' : ''}`}>
                  {skill.name}
                </div>

                {/* Skill Level Bar */}
                <div className="skill-level-container">
                  <div 
                    className={`skill-level-bar ${hoveredCell === index ? 'bar-pulsing' : ''}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Skill Percentage */}
                <div className="skill-percentage">
                  {skill.level}%
                </div>

                {/* Animated Border Effect */}
                {hoveredCell === index && (
                  <div className="cell-border-animation" />
                )}
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="footer-message">
            🎪 <span className="winner-text">Winner takes all!</span> Every skill is a <span className="jackpot-text">jackpot</span>! 🎪
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteSkillsBoard;