/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
*  React - v2.1.0
=========================================================

* Product Page: https://Vivian-Aniebonam/product/material-kit-react
* Copyright 2024 (https://Vivian-Aniebonam)

Coded by Vivian-Aniebonam

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from "react";
// Importing necessary components from @mui/material and custom components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
// Image import
import macbook from "assets/images/glasswater.jpg";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    // Here, you would typically send the email to your server for processing
    setMessage("You have subscribed successfully!");
    setEmail(""); // Clear the email input field after subscription
  };

  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Be the first to see the news</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Subscribe now and elevate your hydration habits with Hydra, your dedicated companion for a healthier lifestyle through optimal water consumption.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }} onClick={handleSubscribe}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
            {/* Display success message */}
            {message && (
              <MKTypography variant="body1" color="success" mt={2}>
                {message}
              </MKTypography>
            )}
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" borderRadius="10px" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;