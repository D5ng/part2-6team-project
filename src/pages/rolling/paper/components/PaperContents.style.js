import styled from 'styled-components';
import { device } from 'styles/breakpoints';

const colors = {
  green: 'var(--green200)',
};

export const Section = styled.section`
  background-color: ${({ $bgColor }) => colors[$bgColor] || 'var(--white)'};
  min-height: calc(100vh - 63px);
`;

export const PaperWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 113px 0 246px 0;

  @media ${device.tablet} {
    padding: 12.1093vw 0 11.8489vw 0;
  }

  @media ${device.mobile} {
    padding: 8.889vw 0;
  }
`;
