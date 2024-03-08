import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SelectedLanguagesProvider } from "./contexts/selectedLanguage.tsx";
import "./index.css";
import { createTheme } from "./theme/theme.ts";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SelectedLanguagesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SelectedLanguagesProvider>
    </ChakraProvider>
  </React.StrictMode>
);
