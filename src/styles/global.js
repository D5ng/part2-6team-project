import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import MyReset from './myReset';
import Colors from './color';

const GlobalStyle = createGlobalStyle`
${reset}
${MyReset}
${Colors}
`;

export default GlobalStyle;
