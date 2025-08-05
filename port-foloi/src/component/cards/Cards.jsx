import React, { useState } from "react";
import "./Cards.css"; // Assuming you have a CSS file for styling

const Cards = () => {
  // 🎯 State to track which cards are flipped
  const [flipped, setFlipped] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });

  // 🎲 Function to handle card flipping
  const flipCard = (cardId) => {
    setFlipped(prevState => ({
      ...prevState,
      [cardId]: !prevState[cardId]
    }));
  };

  return (
    <div className="casino-section">
        
        <div className="casino-header">
            <h2 className="casino-title">🎰My Project Cards </h2>
            <p className="casino-subtitle">Click on each card to reveal the project secrets!</p>
        </div>

        <div className="cards-container">
            {/* Card 1 - Compiler Project */}
            <div className="card-flip" onClick={() => flipCard(1)}>
                <div className={`card-inner${flipped[1] ? " flipped" : ""}`} id="card1">
                    <div className="card-front">
                        <div className="card-back-design">
                            <div className="card-pattern"></div>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-content-inner">
                            <div className="card-suit">♠️</div>
                            <h3>compiler</h3>
                            <p>Advanced compiler optimization tool for virtual languages using antlr4 technology.</p>
                            <a href="https://github.com/zakaria-amghare/compil.git" className="github-link" target="_blank" rel="noopener noreferrer">
                                🔗 View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card 2 - Spotify Clone */}
            <div className="card-flip" onClick={() => flipCard(2)}>
                <div className={`card-inner${flipped[2] ? " flipped" : ""}`} id="card2">
                    <div className="card-front">
                        <div className="card-back-design">
                            <div className="card-pattern"></div>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-content-inner">
                            <div className="card-suit">♥️</div>
                            <h3>Spotify Clone</h3>
                            <p>Custom Spotify clone built with flutter. Features user authentication, playlist management, and music streaming.</p>
                            <a href="https://github.com/zakaria-amghare/PhoneApp.git" className="github-link" target="_blank" rel="noopener noreferrer">
                                🔗 View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card 3 - Crypto Vault */}
            <div className="card-flip" onClick={() => flipCard(3)}>
                <div className={`card-inner${flipped[3] ? " flipped" : ""}`} id="card3">
                    <div className="card-front">
                        <div className="card-back-design">
                            <div className="card-pattern"></div>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-content-inner">
                            <div className="card-suit">♦️</div>
                            <h3>Crypto Vault</h3>
                            <p>Military-grade encryption tool for secure file storage. Features AES-256 encryption with secure key management.</p>
                            <a href="https://github.com/zakaria-amghare/crypto.git" className="github-link" target="_blank" rel="noopener noreferrer">
                                🔗 View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card 4 - Hotel Management */}
            <div className="card-flip" onClick={() => flipCard(4)}>
                <div className={`card-inner${flipped[4] ? " flipped" : ""}`} id="card4">
                    <div className="card-front">
                        <div className="card-back-design">
                            <div className="card-pattern"></div>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-content-inner">
                            <div className="card-suit">♣️</div>
                            <h3>Hotel Management</h3>
                            <p>Comprehensive hotel management system. Features booking management, customer profiles, and payment processing.</p>
                            <a href="https://github.com/zakaria-amghare/website.git" className="github-link" target="_blank" rel="noopener noreferrer">
                                🔗 View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cards;