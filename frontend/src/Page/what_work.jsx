import React, { useState } from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Image sources for the cards
const cardImages = [
  "https://i.ibb.co/8gj1h0xy/image-cap2.webp",
  "https://i.ibb.co/LXBpdY8y/what-we-work-1.webp",
  "https://i.ibb.co/gbq1gwtq/image-cap1.webp",
  "https://i.ibb.co/kg1zQ2Qq/image-cap4.webp"
];

// Titles and descriptions for each card
const cardContent = [
  { title: "Warehousing", description: "Safe and organized storage facilities with inventory management." },
  { title: "Air Freight", description: "Fast and secure air transport for urgent and high-value shipments." },
  { title: "Storage", description: "Cost-effective sea freight solutions for bulk and international shipments" },
  { title: "Cargo Transports", description: "Safe and organized storage facilities with inventory management." },
];

function Whatwork() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hover

  return (
    <div 
      style={{
        width: "100%",
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
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
        What We Work
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

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={0}  // Ensures no space between slides
        slidesPerView={1} // Single slide per view by default
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        style={{ width: "100vw", margin: "0", padding: "0" }} // Full-screen width
      >
        {cardImages.map((image, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card 
              sx={{
                width: "100vw", // Ensures the card takes the full viewport width
                height: "60vh", // Adjust height if needed
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",  
                position: "relative",
                borderRadius: "0", // Removes border radius for full-width look
                transition: "all 0.3s ease",
                backgroundColor: "#f8f8f8", // Added background color
                "&:hover": {
                  transform: "scale(1.02)",  
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Overlay for the image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",  
                  zIndex: 1,
                }}
              />
              {/* Heading inside each card (moved to the top) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "20px", // Moved to the top
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#fff",
                    zIndex: 2,
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    width: '70%',
                    fontFamily: '"Changa", sans-serif',
                    textTransform: "uppercase",
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  {cardContent[index].title}
                </Box>

              {/* Description inside each card (moved to the bottom) */}
              {hoveredIndex === index && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "20px", // Moved to the bottom
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#fff",
                    zIndex: 2,
                    fontSize: "1rem",
                    fontWeight: 400,
                    width: '80%',  // Adjusted width for more space
                    fontFamily: '"Changa", sans-serif',
                    textAlign: "left", // Text aligned to the left
                    padding: "10px 20px", // Increased padding for more space
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "5px",
                    height: "auto", // Auto-adjust height
                    overflow: "hidden", // Prevents overflow
                  }}
                >
                  {cardContent[index].description}
                </Box>
              )}

              {/* Card Media */}
              <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={`Image ${index + 1}`}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 0,
                }}
              />
              </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Whatwork;
