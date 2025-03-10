import React, { useState } from "react";
import { Box, Typography, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Button } from "@mui/material";
import { AttachMoney, HeadsetMic } from "@mui/icons-material"; // For the icons

function IconCard() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleServiceChange = (e) => setService(e.target.value);

  const handleSendMessage = () => {
    const message = `Name: ${name}\nService: ${service}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", padding: "50px 0", marginTop: { xs: "0px", md: "-150px" }, paddingLeft: "35px" }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Best Prices Card */}
        <Grid
          item
          xs={12}
          sm={5}
          md={3}
          sx={{
            textAlign: "center",
            backgroundColor: "#FF5733",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "20px",
            position: "relative",
            zIndex: 10,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box>
            <AttachMoney sx={{ fontSize: "60px", color: "#fff", border: "2px solid #fff", borderRadius: "50%", padding: "15px" }} />
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                marginTop: "20px",
                textTransform: "uppercase",
                fontFamily: '"Changa", sans-serif',
                marginBottom: "15px",
              }}
            >
              Best Prices
            </Typography>
            <hr style={{ border: "1px solid #fff", width: "50px", margin: "10px auto" }} />
            <Typography sx={{ color: "#fff", fontSize: "20px", fontFamily: '"Changa", sans-serif', marginBottom: "15px" }}>
              Looking for reliable and cost-effective cargo solutions? We offer competitive rates for all your shipping needs – whether it’s air, sea, or land. With a focus on affordability and efficiency.
            </Typography>
          </Box>
        </Grid>

        {/* Get Free Quote Card */}
        <Grid
          item
          xs={12}
          sm={5}
          md={3}
          sx={{
            textAlign: "center",
            backgroundColor: "#333",
            padding: "20px",
            position: "relative",
            zIndex: 10,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#FF5733",
                textTransform: "uppercase",
                fontFamily: '"Changa", sans-serif',
                marginBottom: "15px",
              }}
            >
              GET FREE QUOTE
            </Typography>
            <hr style={{ border: "1px solid #FF5733", width: "50px", margin: "10px auto" }} />
            <Typography sx={{ color: "#fff", fontSize: "20px", fontFamily: '"Changa", sans-serif', marginBottom: "15px" }}>
              Get your free quote for any cargo service today. We offer the most competitive rates to suit your shipping needs.
            </Typography>

            {/* Form for Name and Service */}
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "15px", backgroundColor: "#fff", width: "90%", borderRadius: "50px" }}
              value={name}
              onChange={handleNameChange}
            />
            <FormControl fullWidth sx={{ marginBottom: "15px", width: "90%" }}>
              <InputLabel id="service-label" sx={{ fontFamily: '"Changa", sans-serif' }}>Select Service</InputLabel>
              <Select
                labelId="service-label"
                value={service}
                label="Select Service"
                onChange={handleServiceChange}
                sx={{ backgroundColor: "#fff", borderRadius: "50px" }}
              >
                <MenuItem value="Ocean Freight">Ocean Freight</MenuItem>
                <MenuItem value="Land Freight">Land Freight</MenuItem>
                <MenuItem value="Air Freight">Air Freight</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF5733",
                color: "#fff",
                fontFamily: '"Changa", sans-serif',
                textTransform: "uppercase",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": { backgroundColor: "#FF5733" },
                borderRadius: "50px",
              }}
              onClick={handleSendMessage}
            >
              Send Message via WhatsApp
            </Button>
          </Box>
        </Grid>

        {/* 24/7 Support Card */}
        <Grid
          item
          xs={12}
          sm={5}
          md={3}
          sx={{
            textAlign: "center",
            backgroundColor: "#FF5733",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "20px",
            position: "relative",
            zIndex: 10,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box>
            <HeadsetMic sx={{ fontSize: "60px", color: "#fff", border: "2px solid #fff", borderRadius: "50%", padding: "15px" }} />
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                marginTop: "20px",
                textTransform: "uppercase",
                fontFamily: '"Changa", sans-serif',
                marginBottom: "15px",
              }}
            >
              24/7 Support
            </Typography>
            <hr style={{ border: "1px solid #fff", width: "50px", margin: "10px auto" }} />
            <Typography sx={{ color: "#fff", fontSize: "20px", fontFamily: '"Changa", sans-serif', marginBottom: "15px" }}>
              Looking for reliable cargo services at unbeatable prices? We offer cost-effective shipping solutions tailored to your needs with 24/7 support.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IconCard;
