import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #FAFAFA;
  color: #4D4F62;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
