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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

//  React components
import MKBox from "components/MKBox";

//  React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={1000}
              suffix="+"
              title="Hydrated Users"
              description="Join a growing community staying hydrated and healthy with Hydra."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={500}
              suffix="+"
              title="Hydration Reminders Sent"
              description="Never forget to drink water again with personalized hydration reminders."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={50}
              suffix="+"
              title="Health Tips"
              description="Access a wealth of health and hydration tips to keep you well informed."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
