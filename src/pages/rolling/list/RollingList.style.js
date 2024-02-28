import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Section = styled.section`
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;

  @media ${device.tablet} {
    margin-left: 24px;
  }
`;

export const LinkArea = styled.div`
  text-align: center;
  margin-top: 64px;

  @media ${device.tablet} {
    padding: 0 24px;
  }
`;
