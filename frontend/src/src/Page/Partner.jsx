import React from "react";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Partner = () => {
  // Define inline styles
  const partnerSectionStyle = {
    padding: "50px 0",
    // backgroundColor: "#f9f9f9", // Light gray background for the section
  };

  const headerStyle = {
    zIndex: 2,
    position: "relative",
    color: "#FF5733",
    fontSize: "2.125rem",
    fontWeight: 700,
    fontFamily: '"Changa", sans-serif',
    textTransform: "uppercase", // Transforms text to uppercase
    letterSpacing: ".5px", // Adds letter spacing
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    display: "flex", // Using flexbox to center text
    textAlign: "center", // Ensure text is aligned centrally
    marginBottom: "30px", // Space below the header
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1200px", // Maximum width of container
    margin: "0 auto", // Center the container
    padding: "0 15px", // Padding to avoid content touching the edges
  };

  const imgStyle = {
    maxWidth: "100%", // Ensure images are responsive
    height: "auto", // Maintain aspect ratio
    display: "block", // Ensure images are block elements
    margin: "0 auto", // Center the images within the container
  };

  // Array of partner images
  const images = [
    { src: "https://i.ibb.co/PzwzqKxp/5.webp" },
    { src: "https://i.ibb.co/vvxFwhGz/6.webp" },
    { src: "https://i.ibb.co/TM8mHg63/4.webp" },
    { src: "https://i.ibb.co/C5PmQWLY/3.webp" },
    { src: "https://i.ibb.co/k2RcXttj/1.webp" },
    { src: "https://i.ibb.co/36H02NK/2-1.webp" },
  ];

  return (
    <section style={partnerSectionStyle}>
      <div style={containerStyle}>
        <h2 style={headerStyle}>Our Partners</h2>
        <hr style={{
        width: "60px",
        zIndex: 2, 
        marginTop: "0", // Removes the margin between heading and line
        marginBottom: "60px", // Adds bottom margin of 350px
        border: "1px solid #40404a", 
        marginLeft: "auto", 
        marginRight: "auto",
        marginTop:'-15px'
      }} />

        {/* Swiper component for the carousel */}
        <Swiper
          spaceBetween={20} // Adjust space between slides for better fit
          slidesPerView={"auto"} // Auto adjust number of slides
          loop={true} // Loop the carousel
          autoplay={{
            delay: 2500, // Auto slide every 2.5 seconds
            disableOnInteraction: false, // Do not stop autoplay when interacting
            pauseOnMouseEnter: true, // Pause autoplay when mouse enters the swiper area
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // For very small screens, show 1 slide
              spaceBetween: 10, // Reduce space between slides
            },
            480: {
              slidesPerView: 2, // For small screens, show 2 slides
              spaceBetween: 15, // Reduced space for small screens
            },
            640: {
              slidesPerView: 3, // For medium screens, show 3 slides
              spaceBetween: 20, // Space between slides
            },
            1024: {
              slidesPerView: 4, // For larger screens, show 4 slides
              spaceBetween: 30, // Adequate space for larger screens
            },
            1200: {
              slidesPerView: 5, // For very large screens, show 5 slides
              spaceBetween: 40, // Increase space for very large screens
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={`Partner ${index + 1}`} style={imgStyle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partner;
