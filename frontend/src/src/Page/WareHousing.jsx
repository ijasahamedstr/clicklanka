import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';

const sectionStyles = {
    backgroundColor: "#f2f3f4",
    backgroundImage: "url(https://i.ibb.co/vxvgxDCF/bg4.webp)",
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
    backgroundColor: "rgba(255, 255, 255, 0.7)", // White color with opacity
    zIndex: 1, // Ensures the overlay stays above the background image
    boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.3)", // Added a softer shadow for more depth
  };
  

const WareHousing = () => {
  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", md: "30vh" }, // Adjusted for better mobile visibility
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
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

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Content */}
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
            WARE HOUSING
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
            <Typography component="span" color="gray" sx={{ fontFamily: '"Changa", sans-serif' }}>
              Home
            </Typography>{" "}
            &gt;{" "}
            <Typography component="span" color="white" sx={{ fontFamily: '"Changa", sans-serif' }}>
             WARE HOUSING
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Air Freight Shipment Section */}
      <Box sx={{ backgroundColor: '#f2f3f4', paddingTop: '40px', paddingBottom: '40px' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" sx={{ color: '#FF5733', fontFamily: '"Changa", sans-serif', fontWeight: 'bold' }}>
            WARE HOUSING SHIPMENT
          </Typography>
          <hr
            style={{
              width: "70px",
              marginTop: "10px",
              marginBottom: "30px",
              border: "1px solid #40404a",
              marginLeft: '5px'
            }}
          />
          <Typography variant="body1" sx={{ marginTop: '20px', fontFamily: '"Changa", sans-serif' }}>
            Air Freight is any property carried or to be carried in an aircraft. Air cargo comprises air freight, air express, and airmail.
            <br />
            <br />
            Air freight parcel delivery is the transfer and shipment of goods via an air carrier, which may be charter or commercial. Such shipments travel out of commercial and passenger aviation gateways to anywhere planes can fly and land.
          </Typography>

          {/* Updated Image Layout */}
          <Grid container spacing={3} sx={{ marginTop: '30px' }}>
            {/* Left Column - One Full-Height Image */}
            <Grid item xs={12} sm={6}>
              <img
                src="https://i.ibb.co/23zXBVJR/ware-housing-1.jpg"
                alt="Airplane"
                style={{
                  width: '100%',
                  height: 'auto', // Ensuring responsiveness
                  maxHeight: '400px', // Medium Size Image
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </Grid>

            {/* Right Column - Two Stacked Images */}
            <Grid item xs={12} sm={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img
                    src="https://i.ibb.co/RTxN9SF2/ware-housing-2.jpg"
                    alt="Shipment"
                    style={{
                      width: '100%',
                      height: 'auto', // Ensuring responsiveness
                      maxHeight: '190px', // Medium Size Image
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <img
                    src="https://i.ibb.co/VnMhLBN/ware-housing-3.jpg"
                    alt="Loading"
                    style={{
                      width: '100%',
                      height: 'auto', // Ensuring responsiveness
                      maxHeight: '190px', // Medium Size Image
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Customer Support Section */}
          <Box sx={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Changa", sans-serif', fontSize: '15px' }}>
              <span style={{color:'#FF5733'}}>Customer Support:{" "}</span>
              <span>
              The care and handling we give to each of your shipments are also given to Customer Service. We have trained Air Cargo Customer Service Representatives ready to book your cargo shipments and serve your needs. Just call UPS at 800.535.2345 to book space on our aircraft.
              </span>
            </Typography>

            {/* Custom Image Instead of Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginLeft: '20px', // Space between text and image
              }}
            >
              <img
                src="https://i.ibb.co/35f64ZzS/icon7-1.webp" // Replace with the URL of your image
                alt="Customer Support"
                style={{ width: '50px', height: '50px' }} // Adjust size if necessary
              />
            </div>
          </Box>

          <Box sx={{ marginTop: '40px', display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
            <div
                style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                maxWidth: '300px',
                }}
            >
                <img
                src="https://i.ibb.co/PsXRVzsK/icon12.webp" // Replace with the URL of your image
                alt="Customer Support"
                style={{ width: '50px', height: '50px' }} // Adjust size if necessary
                />
            </div>
            <Typography variant="h6" sx={{ fontFamily: '"Changa", sans-serif', fontSize: '15px', textAlign: { xs: 'center', sm: 'left' } }}>
                <span style={{ color: '#FF5733' }}>Time to Delivery:{" "}</span>
                <span>
                Seasonal demand for commodities is also a key factor in calculating air freight rates. Because of changes in supply and demand, certain commodities become more expensive to ship during their peak seasons.
                </span>
            </Typography>
            </Box>

            <Box sx={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Changa", sans-serif', fontSize: '15px' }}>
              <span style={{color:'#FF5733'}}>World Wide Service:{" "}</span>
              <span>
              Shipping is a global industry, but not every country uses the same currency. We will not discuss the monetary policies of governments, but currency exchange rates have a significant impact on air freight rates, too. Even though the U.S. Dollar is the most accepted currency for the international U.S.
              </span>
            </Typography>

            {/* Custom Image Instead of Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginLeft: '20px', // Space between text and image
              }}
            >
              <img
                src="https://i.ibb.co/99JRnH7r/icon11.webp" // Replace with the URL of your image
                alt="Customer Support"
                style={{ width: '50px', height: '50px' }} // Adjust size if necessary
              />
            </div>
          </Box>
          <Box sx={{ marginTop: '40px', display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
            <div
                style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                maxWidth: '300px',
                }}
            >
                <img
                src="https://i.ibb.co/bMrCwvxw/icon10.webp" // Replace with the URL of your image
                alt="Customer Support"
                style={{ width: '50px', height: '50px' }} // Adjust size if necessary
                />
            </div>
            <Typography variant="h6" sx={{ fontFamily: '"Changa", sans-serif', fontSize: '15px', textAlign: { xs: 'center', sm: 'left' } }}>
                <span style={{ color: '#FF5733' }}>Capacity:{" "}</span>
                <span>
                In the simplest terms, ocean freight itself is a commodity. Similar to physical commodities, such as liquids, gels, and aerosol,  when demand is higher than supply, the value of the commodity rises. As we have seen an instant increase in freight rates after Hanjin’s bankruptcy.
                </span>
            </Typography>
            </Box>

            <Box sx={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: '"Changa", sans-serif', fontSize: '15px' }}>
              <span style={{color:'#FF5733'}}>Estimation:{" "}</span>
              <span>
              Seasonal demand for commodities is also a key factor in calculating air freight rates. Because of changes in supply and demand, certain commodities become more expensive to ship during their peak seasons.
              </span>
            </Typography>

            {/* Custom Image Instead of Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginLeft: '20px', // Space between text and image
              }}
            >
              <img
                src="https://i.ibb.co/m5Pc4mhB/icon9.webp" // Replace with the URL of your image
                alt="Customer Support"
                style={{ width: '50px', height: '50px' }} // Adjust size if necessary
              />
            </div>
          </Box>
          <Box sx={{ marginTop: '40px', display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px', marginBottom:'60px' }}>
            <div
                style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                backgroundColor: 'rgba(249,249,249,0.9)',
                maxWidth: '300px',
                }}
            >
                <img
                src="https://i.ibb.co/JWLq6Lb7/icon8.webp" // Replace with the URL of your image
                alt="Customer Support"
                style={{ width: '50px', height: '50px' }} // Adjust size if necessary
                />
            </div>
            <Typography variant="h6" sx={{ fontFamily: '"Changa", sans-serif', fontSize: '15px', textAlign: { xs: 'center', sm: 'left' } }}>
                <span style={{ color: '#FF5733' }}>Package:{" "}</span>
                <span>
                In the simplest terms, air freight itself is a commodity. Similar to physical commodities, such as liquids, gels, and aerosol, when demand is higher than supply, the value of the commodity rises. As we have seen an instant increase in freight rates after Hanjin’s bankruptcy.
                </span>
            </Typography>
            </Box>
        </Container>
      </Box>
      <section style={sectionStyles}>
  {/* Overlay */}
  <div style={overlayStyles}></div>

  {/* Content Wrapper - Ensures Text is Centered */}
  <Box
    sx={{
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '1200px',
      width: '100%',
      mx: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px', // Ensures proper centering
    }}
  >
    <Grid container spacing={4} sx={{ textAlign: 'center',marginTop:'-100px' }}>
      
      {/* Column 1: "Have Any Questions?" */}
      <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: '"Changa", sans-serif', color: '#FF5733' }}>
          HAVE ANY QUESTIONS ?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: '"Changa", sans-serif' }}>
          Our Customer Support is up 24/7!
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#FF5733',borderRadius:'30px',fontFamily: '"Changa", sans-serif'  }}>
          Read More
        </Button>
      </Grid>

      {/* Vertical Divider */}
      <Grid item sx={{ display: { xs: 'none', md: 'block' }, height: 'auto' }}>
        <Box
          sx={{
            borderLeft: '2px solid #34495e', // Vertical line styling
            height: '100%', // Full height of the container
            margin: '0 20px', // Space around the line
          }}
        />
      </Grid>

      {/* Column 2: "Want a Freight?" */}
      <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: '"Changa", sans-serif', color: '#FF5733' }}>
          WANT A FREIGHT ?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: '"Changa", sans-serif' }}>
          Book Now (or) Ask a Question
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#FF5733', padding: '10px 20px',borderRadius:'30px',fontFamily: '"Changa", sans-serif' }}>
          Read More
        </Button>
      </Grid>
    </Grid>
  </Box>
</section>


    </Box>
  );
};

export default WareHousing;
