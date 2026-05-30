import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const ALL_SKILLS = [
  // Core Cybersecurity
  { name: 'Penetration Testing',           level: 88, color: '#FF4444', icon: '🎯', description: 'Conducting vulnerability assessments and ethical hacking using tools like Kali Linux, Metasploit, and Nmap.' },
  { name: 'Network Monitoring',            level: 90, color: '#FF6B35', icon: '📡', description: 'Building and deploying scripts to monitor network traffic, detect anomalies, and alert on suspicious activity.' },
  { name: 'Network Architecture',          level: 85, color: '#F7C59F', icon: '🏗️', description: 'Designing secure, scalable network topologies with proper segmentation and hardening.' },
  { name: 'Wireless Security',             level: 87, color: '#4CC9F0', icon: '📶', description: 'WPA/WPA2 analysis, rogue access point detection, and deep wireless protocol understanding.' },
  { name: 'Packet Analysis',               level: 89, color: '#4361EE', icon: '🔬', description: 'Capturing and dissecting network traffic with Wireshark to identify threats and anomalies.' },
  { name: 'Malware Analysis',              level: 82, color: '#7209B7', icon: '🦠', description: 'Performing static and dynamic malware analysis to understand behavior, indicators, and impact.' },
  { name: 'Incident Response',             level: 84, color: '#F72585', icon: '🚨', description: 'Identifying, containing, and recovering from security incidents following structured IR procedures.' },
  { name: 'NIST & Forensics',              level: 83, color: '#3A0CA3', icon: '🔍', description: 'Applying NIST frameworks for forensic analysis, evidence collection, and compliance auditing.' },
  { name: 'IDS/IPS',                       level: 81, color: '#560BAD', icon: '🛡️', description: 'Configuring and tuning intrusion detection and prevention systems to identify and block threats.' },
  { name: 'Risk Assessment & Auditing',    level: 80, color: '#480CA8', icon: '📋', description: 'Evaluating security posture, identifying risk vectors, and producing actionable audit reports.' },
  { name: 'OSINT',                         level: 86, color: '#3F37C9', icon: '🕵️', description: 'Gathering and analyzing open-source intelligence for threat research and reconnaissance.' },
  { name: 'Cryptography',                  level: 85, color: '#4895EF', icon: '🔐', description: 'Implementing and analyzing encryption algorithms to protect data in transit and at rest.' },
  { name: 'Firewall & Hardening',          level: 88, color: '#4CC9F0', icon: '🧱', description: 'Configuring firewalls, applying hardening baselines, and enforcing least-privilege access.' },
  { name: 'SOC Operations',                level: 79, color: '#F77F00', icon: '🖥️', description: 'Security operations fundamentals including log analysis, SIEM usage, and alert triage.' },
  // Supporting Technical
  { name: 'Python & Bash Scripting',       level: 90, color: '#3776AB', icon: '🐍', description: 'Writing security-focused scripts for automation, network scanning, and forensic tooling.' },
  { name: 'Linux Administration',          level: 88, color: '#FCC624', icon: '🐧', description: 'Managing Linux systems, user permissions, services, and hardening configurations.' },
  { name: 'TCP/IP & Protocols',            level: 91, color: '#00B4D8', icon: '🌐', description: 'Deep understanding of TCP/IP, DNS, HTTP, ARP, and other core networking protocols.' },
  { name: 'Git & GitHub',                  level: 85, color: '#F05032', icon: '🗂️', description: 'Version control, branching strategies, and collaborative development workflows.' },
];

const Skills = () => {
  const [displayedSkills, setDisplayedSkills] = useState(ALL_SKILLS);
  const [spinning, setSpinning] = useState(false);
  const [lockedCells, setLockedCells] = useState(Array(ALL_SKILLS.length).fill(true));
  const [hoveredCell, setHoveredCell] = useState(null);
  const [winner, setWinner] = useState(null);
  const intervalRef = useRef(null);
  const lockTimersRef = useRef([]);

  const spinRoulette = () => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);
    setLockedCells(Array(ALL_SKILLS.length).fill(false)); // all cells spinning

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
    for (let i = 0; i < ALL_SKILLS.length; i++) {
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
        if (i === ALL_SKILLS.length - 1) {
          clearInterval(intervalRef.current);
          setSpinning(false);
          const winnerIdx = Math.floor(Math.random() * ALL_SKILLS.length);
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