import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const FormCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  @media ${device.mobile} {
    padding: 0 20px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 14px;
  color: var(--gray900);
  line-height: 36px;
`;

export const BackgroundTitle = styled(Title)`
  margin-top: 50px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: var(--gray500);
  margin: -8px 0 25px;
`;

export const Section = styled.div``;
