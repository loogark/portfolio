import { theme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource/poppins";
import "@fontsource/zen-dots";
import { stepperTheme } from "./stepper";

export function createTheme() {
  const proTheme = extendTheme(theme);

  const extension = {
    colors: { ...proTheme.colors, brand: proTheme.colors.blue },
    fonts: {
      heading: `'Bebas Neue', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
    components: {
      Stepper: stepperTheme,
    },
  };

  return extendTheme(extension, proTheme);
}
