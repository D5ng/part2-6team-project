import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import myReset from './myReset';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
${reset}
${myReset}
${colors}
`;

export default GlobalStyle;
