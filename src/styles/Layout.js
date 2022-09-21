import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
        color: #ECEAD8;
        padding: 20px;
    }
`;

export const Layout = ({ children, bgColor }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <main>
      <header>{children}</header>
    </main>
  </ThemeProvider>
);
