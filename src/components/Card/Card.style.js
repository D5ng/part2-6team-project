import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Card = styled.div`
  display: flex;
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
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const ProfoleWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  width: 179px;
  height: 56px;
  top: 28px;
  left: 24px;
  gap: 14px;
`;

export const ProfileImg = styled.div`
  div {
    width: 56px;
    height: 56px;
    border-radius: 100px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProfileName = styled.div`
  p {
    font-size: 20px;
    line-height: 24px;
  }
  span {
    font-weight: 700;
  }
`;

export const ProfileLabel = styled.div`
  background-color: #f8f0ff;
  width: 41px;
  height: 20px;
  border-radius: 4px;
  padding: 0 8px;
  gap: 10px;
  span {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.5%;
    color: #9935ff;
  }
`;

export const Text = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -1%;
`;

export const Date = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: -0.5%;
  color: #999999;
`;
