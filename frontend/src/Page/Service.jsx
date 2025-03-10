import React, { useState } from "react";
import { Box, Typography, Grid, Button, Container, Stack } from "@mui/material";
import { Phone, Language, LocalShipping, AccessTime, Group } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Service() {
  const buttonData = [
    { label: "Explore The Freight Service", icon: <Phone />, text: "24/7 SERVICE" },
    { label: "Whatever You Want", icon: <Language />, text: "WORLD WIDE" },
    { label: "Explore Our Vehicles", icon: <LocalShipping />, text: "DELIVERY" },
    { label: "Delivery on Time", icon: <AccessTime />, text: "TIME" },
    { label: "Fully Dedicated Team", icon: <Group />, text: "TEAM" },
  ];

  const serviceContent = {
    "Explore The Freight Service": {
      heading: "Explore The Freight Service",
      content: (
        <>
          <Typography sx={{ color: "#333", fontSize: "18px", marginBottom: "30px", fontFamily: '"Changa", sans-serif' }}>
          Discover reliable and efficient freight solutions tailored to your needs. Whether it’s Air Freight, Sea Freight, or Road Freight, we ensure safe, timely, and cost-effective delivery of your goods. From local shipments to global logistics, we’ve got you covered.
          </Typography>
          <Typography variant="h5" sx={{ color: "#FF5733", fontFamily: '"Changa", sans-serif', marginBottom: "20px" }}>
            BENEFITS:
          </Typography>
          <ul>
            {[
              "On-Time Delivery – Reliable and punctual service.",
              "Cost-Effective – Affordable solutions for all shipment sizes.",
              "Global Reach – Seamless international shipping.",
              "Secure Shipping – Advanced tracking and safety measures.",
              "Scalable Services – Flexible options to grow with your business.",
              "Expert Support – Friendly and knowledgeable customer service.",
            ].map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography sx={{ color: "#333", fontSize: "16px", fontFamily: '"Changa", sans-serif' }}>
                  <strong>{benefit.split("–")[0]}</strong> – {benefit.split("–")[1]}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      ),
      image: "https://i.ibb.co/BVqgWm58/abt-carousel1.webp",
    },
    "Whatever You Want": {
      heading: "Whatever You Want",
      content: (
        <>
          <Typography sx={{ color: "#333", fontSize: "18px", marginBottom: "30px", fontFamily: '"Changa", sans-serif' }}>
            No matter the destination, we ensure your shipments reach their goal efficiently and securely. From local deliveries to international transport, our freight services are designed to connect you to the world.
          </Typography>
          <Typography variant="h5" sx={{ color: "#FF5733", fontFamily: '"Changa", sans-serif', marginBottom: "20px" }}>
            BENEFITS:
          </Typography>
          <ul>
            {[
              "Global Accessibility – Reach any location seamlessly.",
              "Versatile Options – Air, sea, and road freight to suit your needs.",
              "Reliable Deliveries – Timely and secure shipment handling.",
              "Cost-Effective Solutions – Affordable logistics for all scales.",
              "Expert Guidance – Support at every step of the journey.",
            ].map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography sx={{ color: "#333", fontSize: "16px", fontFamily: '"Changa", sans-serif' }}>
                  <strong>{benefit.split("–")[0]}</strong> – {benefit.split("–")[1]}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      ),
      image: "https://i.ibb.co/Tq86717h/img-3.webp",
    },
    "Explore Our Vehicles": {
      heading: "Explore Our Vehicles",
      content: (
        <>
          <Typography sx={{ color: "#333", fontSize: "18px", marginBottom: "30px", fontFamily: '"Changa", sans-serif' }}>
            Our diverse fleet is equipped to handle all your transportation needs. From small deliveries to heavy-duty cargo, we offer reliable and efficient vehicles to ensure your goods are delivered safely and on time.
          </Typography>
          <Typography variant="h5" sx={{ color: "#FF5733", fontFamily: '"Changa", sans-serif', marginBottom: "20px" }}>
            BENEFITS:
          </Typography>
          <ul>
            {[
              "Versatility – Suitable for all cargo types and sizes.",
              "Reliability – Well-maintained fleet for seamless operations.",
              "Safety  – Advanced features to secure your goods in transit.",
              "Efficiency – Optimized for fuel and time savings.",
              "Expert Drivers – Skilled professionals ensuring smooth delivery.",
            ].map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography sx={{ color: "#333", fontSize: "16px", fontFamily: '"Changa", sans-serif' }}>
                  <strong>{benefit.split("–")[0]}</strong> – {benefit.split("–")[1]}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      ),
      image: "https://i.ibb.co/1YNsZk9L/img-1.webp",
    },
    "Delivery on Time": {
      heading: "Delivery on Time",
      content: (
        <>
          <Typography sx={{ color: "#333", fontSize: "18px", marginBottom: "30px", fontFamily: '"Changa", sans-serif' }}>
            Our diverse fleet is equipped to handle all your transportation needs. From small deliveries to heavy-duty cargo, we offer reliable and efficient vehicles to ensure your goods are delivered safely and on time.
          </Typography>
          <Typography variant="h5" sx={{ color: "#FF5733", fontFamily: '"Changa", sans-serif', marginBottom: "20px" }}>
            BENEFITS:
          </Typography>
          <ul>
            {[
              "Reliability – Consistent, punctual service every time",
              "Customer Satisfaction – Enhance trust with timely shipments.",
              "Business Efficiency – Avoid delays and maintain smooth workflows.",
              "Real-Time Tracking – Stay updated on your shipment’s progress.",
              "Peace of Mind – Dependable service you can count on",
            ].map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography sx={{ color: "#333", fontSize: "16px", fontFamily: '"Changa", sans-serif' }}>
                  <strong>{benefit.split("–")[0]}</strong> – {benefit.split("–")[1]}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      ),
      image: "https://i.ibb.co/p69Sf7qy/img-2-1.webp",
    },
    "Fully Dedicated Team": {
      heading: "Fully Dedicated Team",
      content: (
        <>
          <Typography sx={{ color: "#333", fontSize: "18px", marginBottom: "30px", fontFamily: '"Changa", sans-serif' }}>
          Our team of skilled professionals is fully committed to meeting your logistics and freight needs. With expertise and a customer-first approach, we ensure seamless and efficient service at every step.
          </Typography>
          <Typography variant="h5" sx={{ color: "#FF5733", fontFamily: '"Changa", sans-serif', marginBottom: "20px" }}>
            BENEFITS:
          </Typography>
          <ul>
            {[
              "Expertise – Experienced professionals handling your shipments.",
              "Personalized Service – Tailored solutions for your unique needs.",
              "24/7 Support – Assistance whenever you need it.",
              "Reliability – A team you can trust to deliver results.",
              "Problem-Solving – Quick resolutions to any challenges",
            ].map((benefit, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography sx={{ color: "#333", fontSize: "16px", fontFamily: '"Changa", sans-serif' }}>
                  <strong>{benefit.split("–")[0]}</strong> – {benefit.split("–")[1]}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      ),
      image: "https://i.ibb.co/3mmzRt5C/img-4-1.webp",
    },
  };

  const [selectedContent, setSelectedContent] = useState(serviceContent["Explore The Freight Service"]);
  const [activeButton, setActiveButton] = useState("Explore The Freight Service");

  const handleButtonClick = (content) => {
    setActiveButton(content);
    setSelectedContent(serviceContent[content]);
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", padding: "50px 0" }}>
      <Container sx={{ paddingBottom: "60px" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Left Section (Text) */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4" sx={{ color: "#FF5733", fontWeight: "bold", marginBottom: "20px", fontFamily: '"Changa", sans-serif' }}>
              {selectedContent.heading}
            </Typography>
            <hr style={{ border: "1px solid #40404a", width: "60px", margin: "10px auto", textAlign: "center" }} />
            {selectedContent.content}
            <Button variant="contained" sx={{ backgroundColor: "#FF5733", color: "#fff", textTransform: "uppercase", fontFamily: '"Changa", sans-serif', padding: "10px 30px", borderRadius: "5px" }}>
              Read More
            </Button>
          </Grid>

          {/* Right Section (Image) */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={selectedContent.image} alt="Service" style={{ width: "100%", maxWidth: "500px", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }} />
          </Grid>
        </Grid>

        {/* Swiper Buttons */}
        <Box sx={{ textAlign: "center", marginTop: "50px" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            modules={[Pagination, Navigation]}
            style={{ paddingBottom: "30px" }}
          >
            {buttonData.map((button) => (
              <SwiperSlide key={button.label} style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{
                    backgroundColor: activeButton === button.label ? "#ff5d1b" : "white",
                    color: activeButton === button.label ? "#fff" : "#40404a",
                    border: "1px solid #abb2b9",
                    padding: "30px 20px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    minWidth: "180px",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: '"Changa", sans-serif',
                    "&:hover": {
                      backgroundColor: activeButton === button.label ? "#ff5d1b" : "#f5f5f5",
                    },
                  }}
                  onClick={() => handleButtonClick(button.label)}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    {React.cloneElement(button.icon, { sx: { fontSize: "40px", marginBottom: "6px" } })}
                    <Typography style={{ fontFamily: '"Changa", sans-serif', fontSize: "18px" }}>{button.text}</Typography>
                  </Stack>
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default Service;
