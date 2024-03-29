import styled, { css, keyframes } from 'styled-components';
import { device } from 'styles/breakpoints';

export const Form = styled.form`
  width: 720px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 100px;
  }
`;
export const Wrapper = styled.div``;
export const InputTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--gray900);
  margin-bottom: 12px;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const ProfileImgBox = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ProfileListTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray500);
  margin-bottom: 12px;
  @media ${device.mobile} {
    text-align: center;
    font-size: 14px;
  }
`;

export const OverRequestMessage = styled.span`
  color: var(--error);
  font-size: 16px;
`;
