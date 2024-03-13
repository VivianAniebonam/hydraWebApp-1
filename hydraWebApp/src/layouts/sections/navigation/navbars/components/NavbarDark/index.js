/* eslint-disable no-param-reassign */
/**
=========================================================
*  React - v2.1.0
=========================================================

* Product Page: https://Vivian-Aniebonam/product/material-kit-react
* Copyright 2023 Creative Tim (https://Vivian-Aniebonam)

Coded by Vivian-Aniebonam

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//  React components
import MKBox from "components/MKBox";

//  React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/signup",
          label: "Login",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
