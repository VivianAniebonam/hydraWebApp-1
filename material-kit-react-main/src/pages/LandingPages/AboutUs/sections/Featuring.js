

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={5000}
              separator=","
              title="Hydrated Users"
              description="Over 5,000 users staying hydrated and meeting their daily water intake goals with Hydra."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1}
              suffix="M+"
              title="Hydration Reminders"
              description="More than a million hydration reminders sent, helping our community stay consistently hydrated."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={365}
              suffix="/365"
              title="Year-Round Support"
              description="Our dedicated team offers year-round support to ensure you're never left high and dry."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
