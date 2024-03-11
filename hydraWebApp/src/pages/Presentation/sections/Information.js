/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront} // Make sure to replace `bgFront` with a relevant hydration-focused image
                icon="local_drink" // Assuming an icon representing hydration
                title={
                  <>
                    Track Your
                    <br />
                    Hydration
                  </>
                }
                description="Hydra empowers you to maintain optimal hydration levels for enhanced health and wellness."
              />
              <RotatingCardBack
                image={bgBack} // Make sure to replace `bgBack` with another relevant hydration-focused image
                title="Stay Hydrated"
                description="Discover how easy it is to keep track of your water intake and stay hydrated throughout the day with Hydra."
                action={{
                  type: "internal",
                  route: "/features/hydration-tracking", // Adjust the route to where users can learn more about the feature
                  label: "Explore Features",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="visibility" // An icon that represents seeing or tracking
                  title="Hydration Visibility"
                  description="Gain insights into your daily water intake with comprehensive tracking and analytics."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="alarm" // An icon that represents reminders or notifications
                  title="Custom Reminders"
                  description="Never miss your water intake with personalized hydration reminders tailored to your lifestyle."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="trending_up" // An icon that suggests improvement or growth
                  title="Improve Your Health"
                  description="Enhance your overall health and well-being by staying properly hydrated every day."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="sync_alt" // An icon that suggests integration or compatibility
                  title="Seamless Integration"
                  description="Integrate Hydra seamlessly with your daily routine and other health apps for a holistic health approach."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;
