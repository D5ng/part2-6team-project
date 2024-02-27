import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import MyReset from './MyReset.style';
import Colors from './Colors.style';

const GlobalStyle = createGlobalStyle`
${reset}
${MyReset}
${Colors}
`;

export default GlobalStyle;
