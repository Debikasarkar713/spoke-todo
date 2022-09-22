import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: rgb(75,111,68);
      background: linear-gradient(0deg, rgba(75,111,68,1) 0%, rgba(197,159,170,1) 100%);
      font-family: 'Newsreader', serif;
      font-family: 'Roboto Mono', monospace;
      color: #ECEAD8;
      padding: 20px;
    }
`;

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <main>
      <div>{children}</div>
    </main>
  </ThemeProvider>
);
