import React from "react";
import { LocalShipping, DriveEta, AirplanemodeActive } from "@mui/icons-material";

const sectionStyles = {
  backgroundColor: "#f2f3f4",
  backgroundImage: "url(https://i.ibb.co/GQt4ZzKZ/bg1-1.webp)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  margin: "0 auto",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  minHeight: "50vh",
  paddingTop: "20px",
  paddingBottom: "20px",
  marginTop: "-30px",
  position: "relative",
  flexDirection: "column",
  textAlign: "right",
  fontFamily: "Tajawal",
  overflow: "hidden",
  "@media (max-width: 600px)": {
    minHeight: "60vh",
    marginTop: "0",
    padding: "10px",
  },
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Increased opacity for a darker overlay
  zIndex: 1, // Ensures the overlay stays above the background image
  boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.8)", // Added a stronger shadow effect for more depth
};

function ServicesImage() {
    const services = [
        {
          title: "OCEAN FREIGHT",
          description:
            "For large or bulk shipments, sea freight provides a cost-effective solution. Whether you’re transporting goods across continents or dealing with heavy cargo, we offer efficient and secure shipping options that meet your needs.",
          icon: <LocalShipping sx={{ fontSize: 50 }} />,
        },
        {
          title: "LAND FREIGHT",
          description:
            "Our road freight services ensure reliable, door-to-door delivery for local and regional shipments. With a fleet of well-maintained vehicles and experienced drivers, we guarantee timely and safe transportation of your products.",
          icon: <DriveEta sx={{ fontSize: 50 }} />,
        },
        {
          title: "AIR FREIGHT",
          description:
            "When time is of the essence, our air freight services offer fast and reliable delivery for urgent and high-value shipments. With global coverage and top-tier handling, we ensure your goods reach their destination quickly and safely.",
          icon: <AirplanemodeActive sx={{ fontSize: 50 }} />,
        },
      ];
  return (
    <section style={sectionStyles}>
      <div style={overlayStyles}></div>
      {/* Content goes here */}
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
        Our Services
      </h1>
      {/* Small horizontal line */}
      <hr style={{
        width: "60px",
        zIndex: 2, 
        marginTop: "0", // Removes the margin between heading and line
        marginBottom: "300px", // Adds bottom margin of 350px
        border: "1px solid #fff", 
        marginLeft: "auto", 
        marginRight: "auto",
        marginTop:'-20px'
      }} />
    </section>
  );
}

export default ServicesImage;
