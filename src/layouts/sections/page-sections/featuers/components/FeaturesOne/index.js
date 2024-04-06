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

//  React components
import MKBox from "components/MKBox";

//  React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="hydrate"
                    title="Track Your Hydration"
                    description="Hydra makes it easy to monitor your daily water intake with intuitive tracking features, ensuring you stay well-hydrated throughout the day."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="reminder"
                    title="Custom Hydration Reminders"
                    description="Set personalized reminders so you never forget to hydrate again. Whether you're at home, work, or on the move, Hydra keeps you on track."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="goals"
                    title="Hydration Goals"
                    description="Create custom hydration goals based on your lifestyle and health needs. Hydra helps you achieve your daily water intake targets with ease."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="stats"
                    title="Insightful Analytics"
                    description="Gain insights into your hydration habits with detailed analytics and trends. Understand your progress and adjust your goals for optimal health."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Hydrate Smartly with Hydra"
              description="Understanding the importance of hydration is key to health and wellness. Discover how Hydra empowers you to hydrate more effectively and meet your daily water intake goals."
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=Y1fiKGj5H0E",
                color: "info",
                label: "Learn more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
