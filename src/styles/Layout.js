import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #5D696B;
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
