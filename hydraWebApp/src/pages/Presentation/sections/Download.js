
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


//  React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
     <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
  <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
    <MKTypography variant="h3" color="white">
      Ready to Master Hydra?
    </MKTypography>
    <MKTypography variant="h3" color="white" mb={1}>
      Download Your Comprehensive Manuals Today
    </MKTypography>
    <MKTypography variant="body2" color="white" mb={6}>
      Embark on your journey to mastering Hydra with our detailed manuals, designed to provide you with all the information you need to leverage the full power of this multi-faceted application. Whether you&apos;re a new user aiming to get acquainted with Hydra&apos;s capabilities or a seasoned professional looking to deepen your expertise, our manuals cover everything from basic setup to advanced functionalities. Ensure your success and maximize your efficiency by downloading our user-friendly guides now.
    </MKTypography>
    <MKButton
      variant="gradient"
      color="info"
      size="large"
      component="a"
      href="https://www.hydra-application.com/manuals"
      sx={{ mb: 2 }}
    >
      Download Manuals
    </MKButton>
  </Grid>
</Container>
      </MKBox>
      
    </MKBox>
  );
}

export default Download;
