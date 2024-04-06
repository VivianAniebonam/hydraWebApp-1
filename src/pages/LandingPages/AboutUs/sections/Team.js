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
import MKTypography from "components/MKTypography";

//  React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/Screenshot 2024-03-17 162614.png";
import team2 from "assets/images/imresizer-1710707467200.jpg";
import team3 from "assets/images/Anas2.jpg";
import team4 from "assets/images/Mayvis.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            At Hydra, our collective strength lies in our unwavering team spirit. Together, we navigate challenges and innovate solutions, driven by a shared commitment to enhancing health and wellness for all.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Vivian Aniebonam"
                position={{ color: "info", label: "Frontend Developer" }}
                description= "As a Registered Nurse, Lecturer, and Health Informatician, I blend healthcare expertise with education and technology to improve patient care."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Glenn"
                position={{ color: "info", label: "UI Designer" }}
                description="Write a brief intro. about yourself>>"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Anastasiia Tcareva"
                position={{ color: "info", label: "Database" }}
                description="I am a Health Informatics Technology student at Centennial College, with a strong focus on using information technology to enhance healthcare outcomes. Driven by innovation and efficiency, I am dedicated to contributing to the future of healthcare through my expertise in informatics. Drink water! "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Mayvis Ouaziri"
                position={{ color: "info", label: "Backend Developer" }}
                description="As a backend developer, student of Health Informatics Technology, and sports advisor, I've combined my passion for technology and health to aid in the creation of this app. Remembering to drink enough water is crucial for your well-being and performance. Let this app help you stay hydrated and at your best!"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
