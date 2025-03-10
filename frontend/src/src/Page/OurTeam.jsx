import React from 'react';

function OurTeam() {

  return (
    <div 
      style={{
        width: "100%",
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: "Tajawal",
        overflow: "hidden",
      }}
    >
    {/* Heading */}
    <h1 style={{
       zIndex: 2, 
       position: "relative", 
       color: "#FF5733", 
       fontSize: "2.125rem", 
       fontWeight: 700, 
       fontFamily: '"Changa", sans-serif',
       marginTop: "", // Removes margin between the top and the heading
       textTransform: "uppercase", // Transforms text to uppercase
       letterSpacing: ".5px" // Adds letter spacing
      }}>
        Our Team
      </h1>
      
      {/* Small horizontal line */}
      <hr style={{
        width: "60px",
        zIndex: 2, 
        marginTop: "0", // Removes the margin between heading and line
        marginBottom: "60px", // Adds bottom margin of 350px
        border: "1px solid #40404a", 
        marginLeft: "auto", 
        marginRight: "auto",
        marginTop:'-10px'
      }} />

    
    </div>
  );
}

export default OurTeam;
