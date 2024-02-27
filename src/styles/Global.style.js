import { createGlobalStyle } from 'styled-components';
import { MyReset } from './MyReset.style';
import { Reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${Reset}
	${MyReset}
	${Colors}
`;
