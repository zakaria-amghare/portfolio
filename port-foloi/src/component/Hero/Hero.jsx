import React from "react";
import "./Hero.css"; // Assuming you have a CSS file for styling
import AI from "../../assets/AI.png"; // Importing the AI image
const Hero = () => {
  return (
    <div className="hero" id="hero-section">
 <div className="card-container">
        <div className="card-content">
            <div className="photo-section">
                <img src={AI} alt="AI Image" className="profile-photo" />
            </div>
            <div className="text-section">
                <h1 className="name-title">This is Zaki</h1>
                <p className="subtitle">My Portfolio</p>
                <p className="description">
                    Well actually this is not me but an AI photo of me – hope you like it!
                </p>
                <p className="description">
                    I am a <span className="highlight">cyber security enthusiast</span> 🔐
                </p>
                <p className="description">
                    I am a student at the <span className="institution">University of Engineering and Technology USTHB</span> 🎓
                </p>
                <p className="description">
                    I am a member of the <span className="clubs">Microclub and Open Mind</span> at USTHB 🤝
                </p>
                <div className="cta">
                    🚀 Keep exploring my portfolio to know more about my projects
                </div>
            </div>
        </div>

    </div>      
   
  </div>
  );
}

export default Hero;