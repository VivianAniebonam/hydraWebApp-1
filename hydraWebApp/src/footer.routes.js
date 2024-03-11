// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logoo.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Hydra",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      
    },
    {
      icon: <TwitterIcon />,
    
    },
    {
      icon: <GitHubIcon />,
    
    },
    {
      icon: <YouTubeIcon />,
    
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "freebies"},
        { name: "premium tools"},
        { name: "blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "Demostration"},
        { name: "Videos"}
        
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center" },
        { name: "custom development"},
        { name: "FAQ"}
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions" },
        { name: "privacy policy" },
      
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Hydra {" "}
      <MKTypography
        component="a"
       target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
     Application
      </MKTypography>
      .
    </MKTypography>
  ),
};
