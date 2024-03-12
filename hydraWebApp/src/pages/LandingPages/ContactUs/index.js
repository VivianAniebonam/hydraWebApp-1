//CONTACT PAGE

// @mui material components
import Grid from "@mui/material/Grid";

// for redirecting to another page
import { useNavigate } from 'react-router-dom';

// React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Emailjs
import emailjs from 'emailjs-com';

// React (Ensure useState is imported correctly here)
import React, { useState } from 'react'; // Corrected import statement

// Initialize EmailJS with your public key
emailjs.init("2Er9EtsklHHpSoZh0"); 

// React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/bluesea.jpg";


function ContactUs() {
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jukzha5", "template_kx4arug", e.target, "2Er9EtsklHHpSoZh0")
      .then(() => {
        console.log("sending message is going on");
        alert("Message sent successfully!");
        // Redirect to home page
        navigate('/');    // replaces history.push(target)
        
      })
      .catch(() => {
        alert("An error occurred, please try again");
      });
  };
 
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '', // Add this to store the selected category
    // Add other fields as necessary
  });
  
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "/signup",
            label: "Login",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
              For support, general inquiries, or partnership opportunities, please reach out to us at aniebonamvivian1@gmail.com or use our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off" onSubmit={sendEmail}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      name="first_name"
                      label="First Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      name="last_name"
                      label="Last Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      name="reply_to" 
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
  <MKInput
    name="category"
    type="text"
    label="Category"
    select
    SelectProps={{ native: true }}
    onChange={changeHandler} // Ensure you have a handler function to manage form inputs
    value={userData.category} // Assuming you're managing form data with a 'userData' state
    fullWidth
    InputLabelProps={{ shrink: true }}
  >
    <option value="">Select a category</option>
    <option value="Login Issues">Login Issues</option>
    <option value="Registration Issues">Registration Issues</option>
    <option value="Data Display Errors">Data Display Errors</option>
    <option value="Form Submission Errors">Form Submission Errors</option>
    <option value="Payment Problems">Payment Problems</option>
    <option value="Others">Other</option>
    {/* Add more categories as needed */}
  </MKInput>
</Grid>
                  
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      name="message"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info" >
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
