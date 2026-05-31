import React, { useState, useEffect } from "react";
import "./Cards.css";

const PROJECTS = [
  {
    id: "ransomware",
    suit: "♠️",
    title: "Ransomware Simulation",
    description: "A Python script that encrypts files using a hybrid AES + RSA encryption technique, simulating a real ransomware attack in a controlled environment.",
    link: "https://github.com/locoDZ/Simulation-Ransomware",
    linkLabel: "🔗 View on GitHub",
  },
  {
    id: "forensic",
    suit: "♥️",
    title: "Forensic Analyst",
    description: "A full digital forensics investigation — evidence collection, disk image analysis, metadata extraction, and findings documented in a professional report.",
    link: "https://www.linkedin.com/posts/zakaria-amghare-2aa881281_internship-report-ugcPost-7466274898160783360-BFTs/",
    linkLabel: "📄 View Report",
  },
  {
    id: "kerberos",
    suit: "♦️",
    title: "Kerberos / IAM",
    description: "Frontend of an Identity Access Management system — simulating Kerberos-style authentication flows, user roles, and access control policies.",
    link: "https://github.com/locoDZ/IAM_Front",
    linkLabel: "🔗 View on GitHub",
  },
  {
    id: "wiper",
    suit: "♣️",
    title: "Worm Simulation (WIPER)",
    description: "A worm propagation simulation modelling self-replication across files. The end goal: 16 infected files — a controlled study of worm behavior and containment.",
    link: "https://github.com/zakaria-amghare/worm_hehe",
    linkLabel: "🔗 View on GitHub",
  },
];

const JOKER_MESSAGES = [
  { message: "🃏 Wrong card. The house always wins.", sub: "A true gambler knows when to fold." },
  { message: "☠️ Bad beat. You drew the Joker.", sub: "Even the best players misread the deck." },
  { message: "💸 The dealer smiles. You don't.", sub: "Walk away while you still can." },
  { message: "🎴 You picked the wrong card, stranger.", sub: "The casino doesn't forgive mistakes." },
  { message: "🃏 The Joker was always watching.", sub: "Next time, read the table before you bet." },
];

const Cards = () => {
  const [flipped, setFlipped] = useState({});
  const [jokerIndex, setJokerIndex] = useState(null);
  const [jokerResult, setJokerResult] = useState(null);
  const [showJokerModal, setShowJokerModal] = useState(false);

  useEffect(() => {
    setJokerIndex(Math.floor(Math.random() * 5));
  }, []);

  const buildDeck = () => {
    if (jokerIndex === null) return [];
    const deck = [...PROJECTS];
    deck.splice(jokerIndex, 0, { id: "joker" });
    return deck;
  };

  const deck = buildDeck();

  const [jokerFlipped, setJokerFlipped] = useState(false);

  const flipCard = (index) => {
    if (deck[index]?.id === "joker") {
      if (jokerFlipped) {
        // flip back
        setJokerFlipped(false);
        return;
      }
      const outcome = JOKER_MESSAGES[Math.floor(Math.random() * JOKER_MESSAGES.length)];
      setJokerResult(outcome);
      setShowJokerModal(true);
      return;
    }
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const closeModal = () => {
    setShowJokerModal(false);
    setJokerFlipped(true);
  };

  return (
    <div className="casino-section">

      <div className="casino-header">
        <h2 className="casino-title">🎰 My Project Cards 🎰</h2>
        <p className="casino-subtitle">Click on each card to reveal the project secrets!</p>
      </div>

      <div className="cards-container">
        {deck.map((card, index) => {
          if (card.id === "joker") {
            return (
              <div
                className={`card-flip joker-card ${jokerFlipped ? "joker-flipped" : ""}`}
                key="joker"
                onClick={() => flipCard(index)}
              >
                <div className="card-inner joker-inner">
                  {/* Front: hidden face-down */}
                  <div className="card-front joker-front">
                    <div className="card-back-design">
                      <div className="card-pattern"></div>
                    </div>
                  </div>
                  {/* Back: revealed after modal */}
                  <div className="card-back joker-back-face">
                    <div className="joker-revealed-content">
                      <div className="joker-skull">☠️</div>
                      <h3 className="joker-revealed-title">Better Luck Next Time</h3>
                      <p className="joker-revealed-sub">The house always wins.<br />Come back when you're ready to bet again.</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className="card-flip" key={card.id} onClick={() => flipCard(index)}>
              <div className={`card-inner${flipped[index] ? " flipped" : ""}`}>
                <div className="card-front">
                  <div className="card-back-design">
                    <div className="card-pattern"></div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="card-content-inner">
                    <div className="card-suit">{card.suit}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <a
                      href={card.link}
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                    >
                      {card.linkLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Joker Modal */}
      {showJokerModal && jokerResult && (
        <div className="joker-overlay" onClick={closeModal}>
          <div className="joker-modal joker-lose" onClick={e => e.stopPropagation()}>
            <div className="joker-emoji">🃏</div>
            <h2 className="joker-message">{jokerResult.message}</h2>
            <p className="joker-sub">{jokerResult.sub}</p>
            <button className="joker-close" onClick={closeModal}>
              🎰 Walk Away
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cards;