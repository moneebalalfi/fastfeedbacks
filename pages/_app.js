import { AuthProvider } from "@/lib/auth";
import { ThemeProvider } from "emotion-theming";
import { CSSReset } from "@chakra-ui/core";

import customTheme from "@/styles/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
