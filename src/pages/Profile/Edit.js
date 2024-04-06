import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const API_URI = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

function Edit() {
  const [userData, setUserData] = useState({
    profilePicture: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
  });

  useEffect(() => {
    fetch(`${API_URI}/user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUserData({
          profilePicture: data.profilePicture,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email,
          phoneNumber: data.phoneNumber,
          dateOfBirth: data.dateOfBirth,
          password: "", // Since we shouldn't fetch the password, keep it empty
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSave = () => {
    console.log("Saving changes...");
    fetch(`${API_URI}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          console.log('User data updated successfully');
          // Optionally, redirect the user to another page or show a success message
        } else {
          console.error('Failed to update user data');
          // Optionally, show an error message to the user
        }
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };
  
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setUserData({ ...userData, profilePicture: reader.result });
    };
  
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        console.error("File size exceeds the limit");
        return;
      }
      reader.readAsDataURL(file);
    }
  };
  
<img
  src={userData.profilePicture}
  alt="Profile"
  style={{ width: '100px', height: '100px', borderRadius: '50%' }}
/>
  
  return (
    <Container>
      <Grid container spacing={2}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <img
            src={userData.profilePicture}
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleProfilePictureChange}
            id="profilePictureInput"
        />
        <label htmlFor="profilePictureInput">
            <IconButton color="primary" aria-label="edit profile picture" component="span">
            <EditIcon />
            </IconButton>
        </label>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userData.lastName}
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userData.phoneNumber}
            onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Date of Birth (YYYY/MM/DD)"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="YYYY/MM/DD"
            value={userData.dateOfBirth}
            onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })}
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <Button variant="contained" color="primary" style={{ color: 'white' }} onClick={handleSave}>
            Save Changes
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Link to="/profile">
            <Button variant="contained" color="primary" style={{ color: 'white' }}>
              Cancel
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Edit;
