import React from "react";
import { Box, Typography, Grid, TextField, Button, Container, Card, CardContent, Divider } from "@mui/material";
import { Home, Phone, Email, Print } from "@mui/icons-material";

const Contact = () => {
  const offices = [
    {
      city: "COLOMBO",
      address: "10/36B, Wennawatta Road,",
      street: "Wellampitiya, Colombo",
      email: "Clicklanka97@gmail.com",
      phone: "+94 770-683-809",
    },
    {
      city: "KALMUNAI",
      address: "55/1 Mathavan Road,",
      street: "Kalmunai-03",
      email: "Clicklanka97@gmail.com",
      phone: "+94 770-683-809",
    },
    {
      city: "CHENNAI",
      address: "7/17 ECR East Coast Road,",
      street: "Auroville, Pondicherry-05",
      email: "Clicklanka97@gmail.com",
      phone: "+91 894-024-3870",
    },
    {
      city: "BANGALORE",
      address: "282 Pambaru Dam, Uthangarai,",
      street: "Krishnagiri",
      email: "Clicklanka97@gmail.com",
      phone: "+91 894-024-3870",
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
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
            }}
          >
            CONTACT
          </Typography>
          <Typography
            variant="body2"
            color="white"
            sx={{
              fontFamily: '"Changa", sans-serif',
              letterSpacing: "1px",
              lineHeight: "2",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
            }}
          >
            <Typography component="span" color="gray" sx={{ fontFamily: '"Changa", sans-serif' }}>
              Home
            </Typography>{" "}
            &gt;{" "}
            <Typography component="span" color="white" sx={{ fontFamily: '"Changa", sans-serif' }}>
              Contact
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Get in Touch Section */}
      <section
      style={{
        backgroundColor: "#f2f3f4",
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
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="#FF5733"
          sx={{ fontFamily: '"Changa", sans-serif', mb: 2 }}
        >
          GET IN TOUCH
        </Typography>
        <Box sx={{ width: "100px", height: "2px", backgroundColor: "gray", mx: "auto", mb: 4 }} />

        {/* Grid Container */}
        <Grid container spacing={4} justifyContent="center">
          {/* Left Section - Office Info */}
          <Grid item xs={12} sm={6} md={5}>
            <Box
              sx={{
                backgroundColor: "#333",
                color: "white",
                p: 4,
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                textAlign: "center",
                position: "relative",
                paddingBottom:'80px'
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2} sx={{ fontFamily: '"Changa", sans-serif' }}>
                HEAD OFFICE
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, fontFamily: '"Changa", sans-serif' }}>
                Our head office is the hub of our logistics operations, ensuring smooth and efficient service.
                Contact us for expert support and reliable cargo solutions.
              </Typography>

              {/* Contact Details */}
              <Grid container spacing={2} textAlign="left">
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ paddingLeft: "30px" }}>
                    <Home sx={{ color: "#FF5733", mr: 1 }} />
                    <strong style={{ fontFamily: '"Changa", sans-serif' }}>Address</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ paddingLeft: "60px", fontFamily: '"Changa", sans-serif' }}>
                    55/1 Mathavan Road
                  </Typography>
                  <Typography variant="body2" sx={{ paddingLeft: "60px", fontFamily: '"Changa", sans-serif' }}>
                    Kalmunai-03
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography sx={{ paddingLeft: "30px" }}>
                    <Phone sx={{ color: "#FF5733", mr: 1 }} />
                    <strong style={{ fontFamily: '"Changa", sans-serif' }}>Phone</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ paddingLeft: "60px", fontFamily: '"Changa", sans-serif' }}>
                    +94 770 683 809
                  </Typography>
                  <Typography variant="body2" sx={{ paddingLeft: "60px", fontFamily: '"Changa", sans-serif' }}>
                    +94 758 151 246
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography sx={{ paddingLeft: "30px" }}>
                    <Email sx={{ color: "#FF5733", mr: 1 }} />
                    <strong style={{ fontFamily: '"Changa", sans-serif' }}>Email</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ paddingLeft: "60px", fontFamily: '"Changa", sans-serif' }}>
                    Clicklanka97@gmail.com
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography sx={{ paddingLeft: "30px" }}>
                    <Print sx={{ color: "#FF5733", mr: 1 }} />
                    <strong style={{ fontFamily: '"Changa", sans-serif' }}>Fax</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ paddingLeft: "60px", fontFamily: '"Changa", sans-serif' }}>
                    +94 770 683 809
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Right Section - Contact Form */}
          <Grid item xs={12} sm={6} md={5}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                fontFamily: '"Changa", sans-serif', // Apply font family to input fields and labels
                "& .MuiInputLabel-root": {
                  fontFamily: '"Changa", sans-serif', // Apply font family to label
                },
              }}
            >
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                  fontFamily: '"Changa", sans-serif',
                }}
              />
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                  fontFamily: '"Changa", sans-serif',
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: "20px",
                      marginBottom: "20px",
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                      },
                      fontFamily: '"Changa", sans-serif',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: "20px",
                      marginBottom: "20px",
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                      },
                      fontFamily: '"Changa", sans-serif',
                    }}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                size="small"
                sx={{
                  borderRadius: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                  fontFamily: '"Changa", sans-serif',
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#FF5733",
                  color: "white",
                  fontWeight: "bold",
                  py: 1.5,
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#E64A19" },
                  fontFamily: '"Changa", sans-serif',
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </section>

      {/* Branch Offices */}
      <Container sx={{ padding: 0 }} maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#FF5733"
          textAlign="center"
          sx={{ mb: 3, fontFamily: '"Changa", sans-serif' }}
        >
          BRANCH OFFICES
        </Typography>
        <Box sx={{ width: "100px", height: "2px", backgroundColor: "gray", mx: "auto", mb: 4 }} />

        <Grid container spacing={6} justifyContent="center" style={{ marginBottom: "60px" }}>
          {offices.map((office, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)", // More prominent shadow
                  textAlign: "center",
                  backgroundColor: "#333", // Card background color
                  height: "100%", // Ensure cards fill up the grid
                  marginLeft: 0, // Remove left margin
                  marginRight: 0, // Remove right margin
                  width: "100%", // Ensure cards take up full width of grid item
                  "&:hover": {
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)", // Add a stronger shadow on hover
                    transform: "translateY(-5px)", // Lift the card on hover
                    backgroundColor: "#444", // Darken background slightly on hover
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#fff"
                    sx={{
                      backgroundColor: "#FF5733",
                      padding: "15px",
                      borderRadius: "8px",
                      fontFamily: '"Changa", sans-serif',
                      mb: 3, // Increased margin for better spacing
                      fontSize: "1rem", // Slightly smaller text for the title
                      whiteSpace: "normal", // Allow text to wrap
                    }}
                  >
                    {office.city.substring(0, 27)}
                    <br />
                    {office.city.substring(27)}
                  </Typography>

                  {/* Address Section */}
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3, // Increased margin for spacing
                      fontFamily: '"Changa", sans-serif',
                      color: "#fff",
                      fontSize: "0.875rem", // Smaller font size for better readability
                      whiteSpace: "normal", // Allow wrapping of text to the next line
                      overflow: "hidden", // Hide overflow content
                      textOverflow: "ellipsis", // Add ellipsis when text overflows
                    }}
                  >
                    <Home sx={{ color: "#FF5733", mr: 1 }} />
                    <strong>Address:</strong>
                    <span style={{ marginLeft: "8px", fontWeight: "normal", marginTop: "20px" }}>
                      {office.address}
                      <br />
                      {office.street}
                    </span>
                  </Typography>

                  {/* Email Section */}
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      fontFamily: '"Changa", sans-serif',
                      color: "#fff",
                      fontSize: "0.875rem",
                      whiteSpace: "normal", // Allow wrapping of text
                      fontSize: "0.875rem",
                    }}
                  >
                    <Email sx={{ color: "#FF5733", mr: 1 }} />
                    <strong>Email:</strong>
                    <span style={{ marginLeft: "8px", fontWeight: "normal" }}>{office.email}</span>
                  </Typography>

                  {/* Phone Section */}
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: '"Changa", sans-serif',
                      color: "#fff",
                      fontSize: "0.875rem",
                      whiteSpace: "normal", // Allow wrapping of text
                    }}
                  >
                    <Phone sx={{ color: "#FF5733", mr: 1 }} />
                    <strong>Phone:</strong>
                    <span style={{ marginLeft: "8px", fontWeight: "normal" }}>{office.phone}</span>
                  </Typography>
                </CardContent>
                <Divider sx={{ backgroundColor: "#FF5733" }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ width: "100%", height: "600px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13099.617152067056!2d79.83306131121523!3d6.911025147329503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259cf08bb31f7%3A0xde318dd6c0ce640!2sFirst%20Click%20LK!5e1!3m2!1sen!2ssa!4v1741086672472!5m2!1sen!2ssa&zoom=15"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
