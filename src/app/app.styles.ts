import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { fontFamilies, colors } from '@/constants';

const GlobalStyles = createGlobalStyle`
  ${normalize()};
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 1.2;;
    font-weight: 400;
    font-style: normal;
    font-family: ${fontFamilies.inter};
    color: ${colors.gray100};
    background-color: ${colors.gray600};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a,
  button,
  input {
    color: ${colors.gray200};
    font-family: inherit;
    outline: none;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export { GlobalStyles };
