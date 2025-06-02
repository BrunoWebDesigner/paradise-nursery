import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Paradise Nursery</h1>
        <p>
          Welcome to <strong>Paradise Nursery</strong> – your destination for healthy, happy houseplants and expert greenery guidance. 
          At Paradise Nursery, we believe that plants bring life to any space, and we’re here to help you transform your home into a peaceful, green sanctuary. 
          Whether you’re a seasoned plant parent or just starting out, our curated selection of vibrant indoor plants, eco-friendly pots, and helpful care tips will support you every step of the way.
          We’re passionate about sustainability, local sourcing, and spreading the joy of plant care to everyone.
        </p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
}

export default LandingPage;
