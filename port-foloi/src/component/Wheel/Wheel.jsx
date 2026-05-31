import React, { useState, useRef } from 'react';
import './Wheel.css';

const SKILLS = [
  { label: 'Clear Technical\nCommunication',  icon: '🗣️', description: 'Translating complex security findings into language anyone can understand — from devs to executives.' },
  { label: 'Problem Solving\nUnder Pressure',  icon: '🧩', description: 'Staying sharp and structured when systems are down, breaches are live, and every second counts.' },
  { label: 'Attention\nto Detail',              icon: '🔍', description: 'Spotting the one anomalous log line in ten thousand. The difference between a miss and a catch.' },
  { label: 'Team\nCollaboration',               icon: '🤝', description: 'Security is never solo. Working across teams, sharing intel, and keeping everyone aligned.' },
  { label: 'Continuous\nLearning',              icon: '📚', description: 'The threat landscape never stops evolving — neither do I. Always reading, always practicing.' },
  { label: 'Critical &\nAnalytical Thinking',   icon: '🧠', description: 'Questioning assumptions, tracing attack chains, and building airtight conclusions from sparse data.' },
  { label: 'Technical\nReport Writing',         icon: '📝', description: 'Documenting findings clearly and professionally — from vulnerability reports to forensic write-ups.' },
  { label: 'Focus &\nPersistence',              icon: '🎯', description: 'Hunting a threat for hours without losing sharpness. Persistence is what separates good analysts from great ones.' },
  { label: 'Threat\nIntuition',                 icon: '🕵️', description: 'Reading patterns in data that don\'t look wrong yet — but will. Built from experience and deep domain knowledge.' },
  { label: 'Ethical\nJudgment',                 icon: '⚖️', description: 'Knowing what to do — and what NOT to do — with the access and knowledge a security role gives you.' },
  { label: 'Security-First\nMindset',           icon: '🔐', description: 'Seeing every system, every design decision, and every interaction through the lens of: how could this be exploited?' },
  { label: 'Risk\nCommunication',               icon: '📊', description: 'Explaining technical risk in business terms. Making executives understand why patching that CVE matters now.' },
  { label: 'Adaptability to\nNew Threats',      icon: '🚀', description: 'Zero-days don\'t wait for you to catch up. Rapidly learning new attack vectors and adjusting defenses accordingly.' },
  { label: 'Calm Under\nIncident Pressure',     icon: '🧘', description: 'When the alert fires at 3am, panic is the enemy. Clear head, clear process, clear resolution.' },
];

const COLORS = [
  '#8B0000', '#DC143C', '#B8860B', '#8B0000',
  '#DC143C', '#B8860B', '#8B0000', '#DC143C',
  '#B8860B', '#8B0000', '#DC143C', '#B8860B',
  '#8B0000', '#DC143C',
];

const NUM = SKILLS.length;
const SLICE = 360 / NUM;

export default function Wheel() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [landed, setLanded] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const totalRotation = useRef(0);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setShowResult(false);
    setLanded(null);

    const extraSpins = 5 + Math.floor(Math.random() * 5); // 5–9 full rotations
    const randomAngle = Math.floor(Math.random() * 360);
    const total = extraSpins * 360 + randomAngle;

    totalRotation.current += total;
    setRotation(totalRotation.current);

    setTimeout(() => {
      // The pointer is at the top (270deg in SVG terms)
      // Figure out which slice is under it
      const normalised = totalRotation.current % 360;
      const pointerAngle = (360 - normalised + 270) % 360;
      const index = Math.floor(pointerAngle / SLICE) % NUM;
      setLanded(SKILLS[index]);
      setSpinning(false);
      setShowResult(true);
    }, 4000);
  };

  // Build SVG slices
  const slices = SKILLS.map((skill, i) => {
    const startAngle = i * SLICE;
    const endAngle = startAngle + SLICE;
    const r = 200;
    const cx = 210;
    const cy = 210;

    const toRad = (deg) => (deg * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle - 90));
    const y1 = cy + r * Math.sin(toRad(startAngle - 90));
    const x2 = cx + r * Math.cos(toRad(endAngle - 90));
    const y2 = cy + r * Math.sin(toRad(endAngle - 90));

    const midAngle = startAngle + SLICE / 2 - 90;
    const textR = 130;
    const tx = cx + textR * Math.cos(toRad(midAngle));
    const ty = cy + textR * Math.sin(toRad(midAngle));

    const iconR = 165;
    const ix = cx + iconR * Math.cos(toRad(midAngle));
    const iy = cy + iconR * Math.sin(toRad(midAngle));

    return (
      <g key={i}>
        <path
          d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
          fill={COLORS[i % COLORS.length]}
          stroke="rgba(255,215,0,0.6)"
          strokeWidth="1.5"
        />
        <text
          x={tx}
          y={ty}
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(${startAngle + SLICE / 2}, ${tx}, ${ty})`}
          fontSize="9"
          fontFamily="Fredoka One, cursive"
          fill="#FFD700"
          style={{ pointerEvents: 'none' }}
        >
          {skill.label.split('\n').map((line, li) => (
            <tspan key={li} x={tx} dy={li === 0 ? '-0.5em' : '1.2em'}>{line}</tspan>
          ))}
        </text>
        <text
          x={ix}
          y={iy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          style={{ pointerEvents: 'none' }}
        >
          {skill.icon}
        </text>
      </g>
    );
  });

  return (
    <section className="wheel-section" id="wheel-section">
      <div className="casino-header">
      <div className="wheel-header">
        <h2 className="wheel-title">🎡 WHEEL OF FORTUNE 🎡</h2>
        <p className="wheel-subtitle">Spin to reveal the traits that make a great security analyst</p>
      </div>
      </div>

      <div className="wheel-stage">
        {/* Pointer */}
        <div className="wheel-pointer">▼</div>

        {/* Wheel */}
        <div
          className="wheel-wrap"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 1)' : 'none',
          }}
        >
          <svg viewBox="0 0 420 420" width="420" height="420">
            {slices}
            {/* Center cap */}
            <circle cx="210" cy="210" r="32" fill="#1a0000" stroke="#FFD700" strokeWidth="3" />
            <text x="210" y="210" textAnchor="middle" dominantBaseline="middle" fontSize="22">🎰</text>
          </svg>
        </div>

        {/* Spin button */}
        <button
          className={`wheel-spin-btn ${spinning ? 'spinning' : ''}`}
          onClick={spin}
          disabled={spinning}
        >
          {spinning ? '🎲 Spinning...' : '🎲 SPIN'}
        </button>
      </div>

      {/* Result card */}
      {showResult && landed && (
        <div className="wheel-result">
          <div className="result-icon">{landed.icon}</div>
          <h3 className="result-title">{landed.label.replace('\n', ' ')}</h3>
          <p className="result-desc">{landed.description}</p>
        </div>
      )}
    </section>
  );
}