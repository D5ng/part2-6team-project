import styled from 'styled-components';
import { device } from 'styles/breakpoints';

const fontsMapping = {
  Pretendard: 'Pretendard',
  NanumMyeongjo: 'NanumMyeongjo',
  NotoSansKR: 'NotoSansKR',
  NanumBaeEunHyeCe: 'NanumBaeEunHyeCe',
};

export const Container = styled.div`
  padding: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 476px;
  border-radius: 16px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 100;
  @media ${device.mobile} {
    width: 80%;
    padding: 20px;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 19px;
  border-bottom: 1px solid var(--gray200);
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 16px;
`;
export const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;
export const ProfileTitle = styled.div`
  display: flex;
  gap: 6px;
`;
export const ProfileTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`;
export const ProfileText = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;
export const ProfileName = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;
export const CreatAt = styled.span`
  color: var(--gray400);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-left: auto;
  @media ${device.mobile} {
    position: absolute;
    bottom: 85px;
    right: 40px;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const TextBox = styled.div`
  width: 100%;
  padding: 16px 20px 0px 0px;
  color: #5a5a5a;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  overflow-y: scroll;
  font-family: ${({ $font }) => fontsMapping[$font] || 'Pretendard'};
  flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
    height: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray300);
    border-radius: 10px;
  }
`;
export const Button = styled.button`
  margin-top: 24px;
  width: 120px;
  color: var(--white);
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  background: var(--primary600);
`;
