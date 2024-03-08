import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';
import colorMap from 'utils/backgroundColor';

const PseudoStyle = css`
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Section = styled.section`
  background: ${({ $backgroundColor, $backgroundImage }) =>
    $backgroundImage ? `url(${$backgroundImage}) no-repeat center / cover` : $backgroundColor};
  min-height: calc(100vh - 63px);
  position: relative;

  &::after {
    ${({ $backgroundImage }) => $backgroundImage && PseudoStyle}
  }
`;

export const PaperWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 113px 0 246px 0;
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    padding: 12.1093vw 0 11.8489vw 0;
  }

  @media ${device.mobile} {
    padding: 8.889vw 0;
  }
`;
