import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation module
import { useTheme } from "@mui/material/styles";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://i.ibb.co/SwZqStWG/bg1.webp",
  "https://i.ibb.co/Y4Tk0thf/slider3-bg2.webp",
  "https://i.ibb.co/XxCRqhvM/slider1-bg.webp",
];

const slideTexts = [
  "Types of Transport",
  "Our Services",
  "We Transport <br/> <span style='color: rgb(255, 93, 27);'>Anything</span>", // Added <br/> in the text
];

const slideList = [
  ["Ocean Freight", "Land Freight", "Air Freight"], // First slider list
  ["Ware Housing", "Storage Solutions", "Freight Forwarding"], // Second slider list
  [], // No list for the third slider
];

function Slider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect small screens
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // Detect tablets

  return (
    <Box
      sx={{
        width: "100%",
        height: isMobile ? "60vh" : isTablet ? "70vh" : "80vh", // Adjust height for mobile
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation module
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Slower autoplay delay (5 seconds)
        pagination={{ clickable: true }}
        style={{ height: "100%" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%", // Fill entire container height
                  objectFit: "cover", // Ensure image covers the space
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally for all slides
                  transform: "translate(-50%, -50%)", // Ensure the text is perfectly centered
                  zIndex: 6, // Ensure it's on top of other content
                  textAlign: "center", // Center text for all screens
                  width: isMobile ? "90%" : "auto", // Adjust width for mobile
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: index === 2 ? "white" : "rgb(255, 93, 27)", // Set color to white for "We Transport Anything" slide
                    fontFamily: '"Changa", sans-serif', // Apply the font
                    textTransform: "uppercase", // Uppercase text
                    fontWeight: "500", // Bold text
                    fontSize: isMobile ? "25px" : isTablet ? "50px" : "70px", // Adaptive font size
                    letterSpacing: isMobile ? "2px" : "7px", // Adjust letter spacing for readability
                    lineHeight: isMobile ? "35px" : isTablet ? "60px" : "80px", // Adjust line height
                    textAlign: "center", // Ensure text is centered for all screens
                    animation: index === 0 ? "fadeInLeft 2s ease-out" : "none", // Apply animation only to the first slide
                  }}
                  dangerouslySetInnerHTML={{ __html: slideTexts[index] }}
                />
                {slideList[index].length > 0 && (
                  <Box
                    sx={{
                      marginTop: "30px", // Increased margin top for more space above the list
                      color: "white",
                    }}
                  >
                    <ul
                      style={{
                        padding: "10px", // Add padding for the list container
                        display: "flex", // Flexbox for row layout
                        flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
                        justifyContent: "center", // Center items horizontally
                        listStyleType: "none", // Remove default list bullets
                      }}
                    >
                      {slideList[index].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            position: "relative",
                            marginRight: isMobile ? "0px" : "30px", // Remove margin on mobile
                            marginBottom: isMobile ? "20px" : "0px", // Add margin bottom on mobile
                            paddingLeft: "20px", // Adding space to accommodate custom bullet
                            fontSize: isMobile ? "25px" : "35px", // Adjust font size for mobile
                            animation: `fadeInLeft 1s ease-out ${i * 0.2}s`, // Apply animation with delay for each item
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "50%",
                              transform: "translateY(-50%)",
                              width: "15px", // Increased width of the square bullet
                              height: "15px", // Increased height of the square bullet
                              backgroundColor: "rgb(255, 93, 27)", // Set bullet color to red
                            }}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Add the CSS animation here */}
      <style>
        {`
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Slider;
