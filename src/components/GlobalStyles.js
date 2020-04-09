import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyles = createGlobalStyle`
  ${reset};  
  body {
    background-color: #e9ecef;
    color: rgb(55, 53, 47);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.65;
  }
`;

export const palette = {
  white: 'rgba(255, 255, 255, 0.9)',
  black: 'rgb(55, 53, 47);'
};
