import React, { useState } from 'react';

const TeamCard = ({ teamNumber, role, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const teamCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '250px', // Slightly larger width for better spacing with bigger images
    boxShadow: isHovered ? '0 8px 16px rgba(255, 87, 51, 0.6)' : '0 4px 8px rgba(255, 87, 51)', // Adding shadow effect on hover
    overflow: 'hidden',
    margin: '20px', // Increased margin for more space between the cards
    transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for the hover effect
  };

  const headerStyle = {
    backgroundColor: '#FF5733',
    padding: '10px',
    textAlign: 'center',
  };

  const avatarStyle = {
    borderRadius: '50%',
    width: '100px', // Increased size for a larger avatar
    height: '100px', // Increased size for a larger avatar
    border: '4px solid #17202a', // Updated border color to #17202a
    objectFit: 'cover', // Ensures the image covers the circle without stretching
    transition: 'transform 0.3s ease', // Smooth transformation for scaling effect
  };

  const bodyStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#f5f5f5',
  };

  const socialIconStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '24px',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={teamCardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={headerStyle}>
        <img
          src={imageSrc}
          alt={`Team ${teamNumber}`}
          style={{
            ...avatarStyle,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Image zoom effect on hover
          }}
        />
      </div>
      <div style={bodyStyle}>
        <h3>Team {teamNumber}</h3>
        <p>{role}</p>
      </div>
      <div style={footerStyle}>
        <a href="#" style={socialIconStyle}>
          <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
        </a>
        <a href="#" style={socialIconStyle}>
          <i className="fab fa-twitter"></i> {/* Twitter Icon */}
        </a>
        <a href="#" style={socialIconStyle}>
          <i className="fab fa-google-plus-g"></i> {/* Google Plus Icon */}
        </a>
        <a href="#" style={socialIconStyle}>
          <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
        </a>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        position: 'relative',
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'Tajawal',
        overflow: 'hidden',
      }}
    >
      {/* Heading */}
      <h1
        style={{
          zIndex: 2,
          position: 'relative',
          color: '#FF5733',
          fontSize: '2.125rem',
          fontWeight: 700,
          fontFamily: '"Changa", sans-serif',
          marginTop: '',
          textTransform: 'uppercase',
          letterSpacing: '.5px',
        }}
      >
        Our Team
      </h1>

      {/* Small horizontal line */}
      <hr
        style={{
          width: '60px',
          zIndex: 2,
          marginTop: '0',
          marginBottom: '60px',
          border: '1px solid #40404a',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '-10px',
        }}
      />

      {/* Team Cards Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly', // Added more space between cards
          padding: '20px',
          flexWrap: 'wrap', // Allow wrapping on smaller screens
          maxWidth: '1200px',
          margin: '0 auto', // Center the content horizontally
        }}
      >
        <TeamCard
          teamNumber={1}
          role="Dipl. Physiotherapeut"
          imageSrc="https://i.ibb.co/8x9xK4H/team.jpg"
        />
        <TeamCard
          teamNumber={2}
          role="Dipl. Physiotherapeut"
          imageSrc="https://i.ibb.co/8x9xK4H/team.jpg"
        />
        <TeamCard
          teamNumber={3}
          role="Dipl. Physiotherapeut"
          imageSrc="https://i.ibb.co/8x9xK4H/team.jpg"
        />
        <TeamCard
          teamNumber={4}
          role="Dipl. Physiotherapeut"
          imageSrc="https://i.ibb.co/8x9xK4H/team.jpg"
        />
      </div>
    </div>
  );
};

export default OurTeam;
