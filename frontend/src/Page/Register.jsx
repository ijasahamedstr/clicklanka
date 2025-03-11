import React from "react";
import { Box, Typography, Card, CardContent, TextField, Button } from "@mui/material";

const Register = () => {
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
            Register
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
              Register
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Centered Register Form Card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5vh", // Adjusting the margin to bring the card closer to the banner
          padding: "20px",
        }}
      >
        <Card sx={{ width: { xs: "90%", sm: "60%", md: "40%" }, padding: "20px" }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Changa", sans-serif',
                marginBottom: "20px",
                fontWeight: "bold",
                textAlign: "center",
                color: 'rgb(255, 87, 51)',
              }}
            >
              Create Account
            </Typography>
            {/* Form Fields */}
            <form>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                sx={{
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Rounded corners with 50px radius for input fields
                    "& input": {
                      fontFamily: '"Changa", sans-serif', // Apply Changa font to the input text
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: '"Changa", sans-serif', // Apply Changa font to the label
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                sx={{
                  marginBottom: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Rounded corners with 50px radius for input fields
                    "& input": {
                      fontFamily: '"Changa", sans-serif', // Apply Changa font to the input text
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: '"Changa", sans-serif', // Apply Changa font to the label
                  },
                }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                sx={{
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Rounded corners with 50px radius for input fields
                    "& input": {
                      fontFamily: '"Changa", sans-serif', // Apply Changa font to the input text
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: '"Changa", sans-serif', // Apply Changa font to the label
                  },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  padding: "10px 0",
                  fontFamily: '"Changa", sans-serif',
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "50px", // Rounded button
                  background: 'rgb(255, 87, 51)',
                }}
              >
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Register;
