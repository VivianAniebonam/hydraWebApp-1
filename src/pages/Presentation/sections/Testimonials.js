/*
=========================================================
*  React - v2.1.0
=========================================================

* Product Page: https://researchgrips.com/
* Copyright 2024 (https://Vivian-Aniebonam)

Coded by Vivian-Aniebonam

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

//  React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

//  React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";



function Information() {
  return (
    <MKBox component="section" py={12}  pt={0}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={7}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over {"  "}</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
          {"  "} 1,679,477+ Users
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
  Health enthusiasts, fitness startups, educational institutions, and wellness organizations are embracing Hydra for its innovative hydration tracking and reminder system.
</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Vivian Aniebonam. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">             
         
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
