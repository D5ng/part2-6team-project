import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Card = styled.div`
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background-color: white;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px 20px;
`;

export const MessageProfile = styled.div`
  display: flex;
  width: 100%;
  height: 73px;
  gap: 14px;
  border-bottom: 1px solid #00000014;
  padding-bottom: 20px;
`;

export const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProfileName = styled.div`
  font-size: 20px;
  line-height: 24px;
  span {
    font-weight: 700;
  }
`;

export const Text = styled.p`
  height: 117px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -1%;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Date = styled.span`
  font-size: 12px;
  letter-spacing: -0.5%;
  color: #999999;
`;
