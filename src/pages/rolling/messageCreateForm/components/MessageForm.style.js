import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Form = styled.form`
  width: 720px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 300px;
  }
`;
export const Wrapper = styled.div``;

export const InputTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--gray900);
  margin-bottom: 12px;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ProfileImgListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const ProfileListTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray500);
  @media ${device.mobile} {
    text-align: center;
  }
`;
