/*
=========================================================
*  React - v2.1.0
=========================================================

* Product Page: https://Vivian-Aniebonam/product/material-kit-react
* Copyright 2023 Creative Tim (https://Vivian-Aniebonam)

Coded by Vivian-Aniebonam

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState, useEffect } from "react";
// MUI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
// Custom components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// Assets
import profilePicture from "assets/images/bruce-mars.jpg";
// Define your API URI
const API_URI = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

function Profile() {
  // State for form fields
  const [userId, setuserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  

  useEffect(() => {
    // Simulate fetching user data - replace this with your actual fetch request
    fetch(`${API_URI}${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization header might be needed if your API requires authentication
        'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setuserId(data.userId);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  }, []);

  // Placeholder function for future implementation
  //const handleSave = () => {
    // Implement save functionality here
    //console.log({ firstName, lastName, email });
    // Typically, you would send a PUT or POST request to your backend to update the user data
  //};

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Bruce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <MKTypography variant="h3">Michael Roven</MKTypography>
                <MKTypography variant="h3">{`${firstName} ${lastName}`}</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Edit
                </MKButton>
              </MKBox>
              <form>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
              <MKTypography
                component="a"
                href="#"
                variant="body1"
                fontWeight="light"
                color="info"
                mt={3}
                sx={{
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",
                  "& .material-icons-round": {
                    transform: `translateX(3px)`,
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },
                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: `translateX(6px)`,
                  },
                }}
              >
                More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;