/**
=========================================================
*  React - v2.1.0
=========================================================

* Product Page: https://researchgrips.com/
* Copyright 2024 (https://Vivian-Aniebonam)

Coded by Vivian-Aniebonam

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

//  React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};
