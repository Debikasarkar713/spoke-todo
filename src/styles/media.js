import { css } from "styled-components";

export const sizes = {
  desktopMax: 1600,
  desktopLarge: 1400,
  desktopMedium: 1200,
  desktop: 1024,
  tablet: 768,
  mobile: 512,
  mobileLarge: 425,
  mobileMedium: 375,
  mobileSmall: 320,
};

//iterating through the sizes object to create media template

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
export default media;
