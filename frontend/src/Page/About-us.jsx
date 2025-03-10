import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Aboutus = () => {
    const [activeContent, setActiveContent] = useState('MARINE PARTS');
    const [activeItem, setActiveItem] = useState('MARINE PARTS');
  
    // Function to update the active content
    const handleItemClick = (content) => {
      setActiveContent(content);
      setActiveItem(content); // Update active item to change the color
    };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://i.ibb.co/gbq1gwtq/image-cap1.webp",
    "https://i.ibb.co/kg1zQ2Qq/image-cap4.webp",
    "https://i.ibb.co/LXBpdY8y/what-we-work-1.webp",
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  const steps = [
    {
      number: "1",
      title: "CHOOSE YOUR CARGO SERVICE",
      description:
        "Select from our comprehensive cargo solutions: Sea, Air, or Land. Each option is designed for efficiency, safety, and cost-effectiveness, ensuring your goods reach their destination on time, every time.",
      background: "https://i.ibb.co/wh5Yt40L/process-img3.webp",
    },
    {
      number: "2",
      title: "SELECT PAYMENT",
      description:
        "Choose a payment method that works best for you! We offer secure and convenient options to ensure a smooth transaction. Fast, easy, and hassle-free!",
      background: "https://i.ibb.co/ccbJrtvF/process-img2.webp",
    },
    {
      number: "3",
      title: "FOLLOW YOUR ORDER",
      description:
        "Stay informed every step of the way! Track your orders in real time, receive updates, and ensure timely delivery—all from one convenient place.",
      background: "https://i.ibb.co/Y4s53SRt/process-img1.webp",
    },
  ];

  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "40vh", md: "30vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://i.ibb.co/k2fgS5MH/breadcrumb-contact.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 10, padding: "20px" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "#FF5733",
              fontFamily: '"Changa", sans-serif',
              marginBottom: "10px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            color="white"
            sx={{
              fontFamily: '"Changa", sans-serif',
              letterSpacing: "1px",
              lineHeight: "2",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            }}
          >
            <Typography component="span" color="gray">
              Home
            </Typography>{" "}
            &gt;{" "}
            <Typography component="span" color="white">
              About Us
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Get in Touch Section */}
      <Box
        sx={{
          backgroundColor: "#f2f3f4",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: "#FF5733",
                    fontSize: "2.125rem",
                    fontWeight: 700,
                    fontFamily: '"Changa", sans-serif',
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                  }}
                >
                  OUR ACHIEVEMENT
                </Typography>
                <hr
                  style={{
                    width: "60px",
                    marginTop: "0",
                    marginBottom: "30px",
                    border: "1px solid #40404a",
                    marginLeft:'5px'
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ marginTop: "10px", fontFamily: '"Changa", sans-serif' }}
                >
                  At ClickLanka, we are proud of the journey we’ve embarked on,
                  delivering excellence in every shipment. With years of expertise
                  in the cargo industry, we’ve successfully handled thousands of
                  shipments, ensuring safe and timely deliveries via sea, air, and
                  land. Our dedication to customer satisfaction, innovative
                  solutions, and unmatched reliability has made us a leader in the
                  door-to-door service sector.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    width:'30%',
                    fontFamily: '"Changa", sans-serif',
                    borderRadius: "50px",
                    backgroundColor: "#f76a28",
                    marginBottom: "30px",
                    color: "white",
                    "&:hover": { backgroundColor: "#e65b20" },
                  }}
                >
                  Read More
                </Button>

                {/* Three-Image Column Layout */}
                <Grid container spacing={2}>
                  {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100px",
                          overflow: "hidden",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Right Column - Image Slider */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  width: "100%",
                  height: "500px", // Ensure the height is equal to left column
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Achievement"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Button
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    minWidth: "40px",
                    padding: "10px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                  }}
                >
                  &#10094;
                </Button>
                <Button
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    minWidth: "40px",
                    padding: "10px",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                  }}
                >
                  &#10095;
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* HOW IT WORKS SECTION */}
      <Box sx={{ backgroundColor: "#fff", padding: "0px 0", width: "100%", fontFamily: '"Changa", sans-serif',paddingBottom:'60px' }}>
        <Grid container spacing={0} alignItems="center">
          {/* Left Section - Video & Heading */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                position: "relative",
                backgroundImage: "url('https://i.ibb.co/NdH6Kkp4/video-sec-bg1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "300px", md: "450px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: "20px",
                filter: "brightness(90%)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  color: "#FF5733",
                  textTransform: "uppercase",
                  fontFamily: '"Changa", sans-serif',
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  marginBottom: "20px",
                }}
              >
                HOW IT WORKS?
              </Typography>

              {/* Play Button */}
              <Box
                sx={{
                  position: "relative",
                  marginTop: "20px",
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#FF5733",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "0.3s",
                    outline: "5px solid white",
                  },
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: "50px", color: "white" }} />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  marginTop: "20px",
                  fontWeight: "bold",
                  fontFamily: '"Changa", sans-serif',
                  marginBottom: "10px",
                }}
              >
                Play Video Now
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Changa", sans-serif',
                  marginBottom: "10px",
                }}
              >
                We Provide Highest Quality
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#FF5733",
                  fontWeight: "bold",
                  fontFamily: '"Changa", sans-serif',
                  marginTop: "10px",
                }}
              >
                Freight Services
              </Typography>
            </Box>
          </Grid>

          {/* Right Section - Steps */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={0} sx={{ justifyContent: "space-between", margin: 0 }}>
              {steps.map((step, index) => (
                <Grid item xs={12} sm={4} key={index} sx={{ padding: 0 }}>
                  <Box
                    sx={{
                      position: "relative",
                      backgroundImage: `url(${step.background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: { xs: "300px", md: "450px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      padding: "20px",
                      filter: "brightness(60%)",
                      transition: "0.3s",
                      "&:hover": { filter: "brightness(100%)", transform: "scale(1.02)" },
                    }}
                  >
                    {/* Transparent Black Background for Text Layer */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)", 
                        zIndex: 1,
                      }}
                    />

                    {/* Step Number */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100px",
                        backgroundColor: "#FF5733",
                        color: "white",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "18px",
                        zIndex: 2,
                      }}
                    >
                      {step.number}
                    </Box>

                    {/* Step Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#FF5733",
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: "50px",
                        fontFamily: '"Changa", sans-serif',
                        zIndex: 2,
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Step Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "center",
                        marginTop: "10px",
                        paddingX: "10px",
                        fontFamily: '"Changa", sans-serif',
                        zIndex: 2,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <section
      style={{
        backgroundColor: "#40404a",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        height: "auto", // Adjust height to fit the content
        paddingTop: "20px", // Padding for the top
        paddingBottom: "20px", // Padding for the bottom
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        {/* Container for sidebar and content */}
        <div style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1200px', // Maximum width for the container (adjust as needed)
          justifyContent: 'space-between', // Space between the sidebar and content area
        }}>
          {/* Sidebar */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            backgroundColor: '#fdfefe',
            color: 'black', // Black text color for the sidebar
            padding: '20px',
            marginRight: '20px' // Added margin to the right for spacing between the sidebar and content
          }}>
            {/* Sidebar items with icons */}
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'AEROSPACE & DEFENSE' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('AEROSPACE & DEFENSE')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-flask"></i>
              <span>AEROSPACE & DEFENSE</span>
            </div>
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'OIL & GAS ENERGY' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('OIL & GAS ENERGY')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-cogs"></i>
              <span>OIL & GAS ENERGY</span>
            </div>
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'WAREHOUSING' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('WAREHOUSING')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-box"></i>
              <span>WAREHOUSING</span>
            </div>
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'LAND FREIGHT & PACKING' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('LAND FREIGHT & PACKING')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-truck"></i>
              <span>LAND FREIGHT & PACKING</span>
            </div>
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'RAIL TRANSPORT' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('RAIL TRANSPORT')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-train"></i>
              <span>RAIL TRANSPORT</span>
            </div>
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'AUTOMOTIVE' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('AUTOMOTIVE')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-car"></i>
              <span>AUTOMOTIVE</span>
            </div>
            <div
              style={{ ...sidebarItemStyle, backgroundColor: activeItem === 'MARINE PARTS' ? '#ff6f00' : '' }}
              onClick={() => handleItemClick('MARINE PARTS')}
            >
              <i style={{ marginRight: '10px', fontSize: '18px', color: 'black' }} className="fas fa-ship"></i>
              <span>MARINE PARTS</span>
            </div>
          </div>

          {/* Content */}
          <div style={{
            backgroundColor: '#40404a',
            color: 'white',
            padding: '20px',
            width: 'calc(100% - 270px)', // Adjusted width to account for the sidebar and margin
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{activeContent}</h2>
            <p>
              {activeContent === 'MARINE PARTS' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              {activeContent === 'OIL & GAS ENERGY' && 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              {activeContent === 'AEROSPACE & DEFENSE' && 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
              {activeContent === 'WAREHOUSING' && 'Excepteur sint occaecat cupidatat. Esse cillum dolore eu fugiat nulla pariatur.'}
              {activeContent === 'LAND FREIGHT & PACKING' && 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              {activeContent === 'RAIL TRANSPORT' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              {activeContent === 'AUTOMOTIVE' && 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
            </p>
            <h4 style={{ marginTop: '20px' }}>BENEFITS :</h4>
            <ul style={{
              listStyleType: 'disc',
              marginLeft: '20px',
              color: 'white',       // Make text color white
              backgroundColor: '#40404a', // Optional: Adding a background color to the ul
              padding: '10px'      // Add padding for better spacing
            }}>
              <li style={{ marginBottom: '10px' }}>Ut enim ad minim veniam</li>
              <li style={{ marginBottom: '10px' }}>Exercitation ullamco laboris</li>
              <li style={{ marginBottom: '10px' }}>Duis aute irure dolor</li>
              <li style={{ marginBottom: '10px' }}>Voluptate velit esse cillum dolore</li>
              <li style={{ marginBottom: '10px' }}>Excepteur sint occaecat</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </Box>
  );
};

const sidebarItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'black', // Black text color for items in the sidebar
    marginBottom: '10px'
  };

export default Aboutus;
