import React, { useState } from "react";
import { Box, Typography, Grid, Button, Card, CardContent, Container } from "@mui/material";
import { LocalShipping, DriveEta, AirplanemodeActive } from "@mui/icons-material"; // Icons for the services

function OurServices() {
  // Track clicked card
  const [clickedIndex, setClickedIndex] = useState(null);

  const services = [
    {
      title: "OCEAN FREIGHT",
      description:
        "For large or bulk shipments, sea freight provides a cost-effective solution. Whether you’re transporting goods across continents or dealing with heavy cargo, we offer efficient and secure shipping options that meet your needs.",
      icon: "https://i.ibb.co/35Db3kpj/icon1-1.webp", // Image path for the clicked card
    },
    {
      title: "LAND FREIGHT",
      description:
        "Our road freight services ensure reliable, door-to-door delivery for local and regional shipments. With a fleet of well-maintained vehicles and experienced drivers, we guarantee timely and safe transportation of your products.",
      icon: "https://i.ibb.co/WWkDj78Y/icon4-1.webp", // Image path for the clicked card
    },
    {
      title: "AIR FREIGHT",
      description:
        "When time is of the essence, our air freight services offer fast and reliable delivery for urgent and high-value shipments. With global coverage and top-tier handling, we ensure your goods reach their destination quickly and safely.",
      icon: "https://i.ibb.co/VySCY3c/icon7.webp", // Image path for the clicked card
    },
    {
      title: "WARE HOUSING",
      description:
        "Need storage space for your goods? Our warehousing services offer secure, organized storage solutions with inventory management to keep your business running smoothly. Whether short-term or long-term, your goods are in safe hands.",
      icon: "https://i.ibb.co/nsF9pjrY/icon3-1.webp", // Image path for the clicked card
    },
    {
      title: "STORAGE SOLUTIONS",
      description:
        "Our secure and well-managed warehousing facilities help businesses store and manage inventory efficiently.Secure and climate-controlled storage Short-term & long-term warehousing options Inventory management for smooth operations Easy accessibility for quick dispatch",
      icon: "https://i.ibb.co/4nF1RGMk/icon5-1.webp", // Image path for the clicked card
    },
    {
      title: "FREIGHT FORWARDING",
      description:
        "When time is of the essence, our air freight services offer fast and reliable delivery for urgent and high-value shipments. With global coverage and top-tier handling, we ensure your goods reach their destination quickly and safely.",
      icon: "https://i.ibb.co/HDDLPJrt/icon6-1.webp", // Image path for the clicked card
    },
  ];

  return (
    <Box sx={{ padding: "40px 0", marginTop: { xs: "-300px", md: "-300px" }, marginBottom: "60px" }}>
      {/* Container for centering content */}
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: "400px", // Fixed height for all cards
                  boxShadow:
                    clickedIndex === index
                      ? "0 8px 24px rgba(0, 0, 0, 0.2)"
                      : "0 4px 12px rgba(0, 0, 0, 0.1)", // Adjust box shadow on click
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Ensures the content inside is evenly spaced
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add smooth transition
                  backgroundColor: clickedIndex === index ? "white" : "transparent", // Change background to white on click
                  position: "relative", // Ensure z-index works
                  zIndex: clickedIndex === index ? 10 : 1, // Bring the clicked card to the front
                  "&:hover": {
                    transform: "scale(1.05)", // Scale the card slightly on hover
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
                    backgroundColor: "#FFFFFF", // Set the background to white on hover for clicked cards
                  },
                }}
                onClick={() => setClickedIndex(index)} // Set the clicked index
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2, background: "white" }}>
                  {/* Wrapping the icon and title in a single container for hover effect */}
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "16px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", background: "black" }}>
                      {/* Use an image when clicked */}
                      <img src={service.icon} alt={service.title} style={{ width: "60px", height: "60px" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Changa", sans-serif',
                        color: clickedIndex === index ? "#fff" : "#000", // Change title color on click
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Add small horizontal line */}
                    <hr
                      style={{
                        width: "60px",
                        border: "1px solid #ff5733",
                        margin: "10px auto",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"Changa", sans-serif',
                      marginBottom: "16px",
                      color: clickedIndex === index ? "#fff" : "#000", // Change description color on click
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: "16px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      backgroundColor: "#FF5733", // Set button color
                      borderRadius: "50px", // Rounded corners
                      padding: "10px 20px", // Adjust padding for better look
                      "&:hover": {
                        backgroundColor: "#e64a19", // Darker shade on hover
                      },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurServices;
