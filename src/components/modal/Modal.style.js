import styled from 'styled-components';
import { device } from 'styles/breakpoints';
import { motion } from 'framer-motion';

const fontsMapping = {
  Pretendard: 'Pretendard',
  NanumMyeongjo: 'NanumMyeongjo',
  NotoSansKR: 'NotoSansKR',
  NanumBaeEunHyeCe: 'NanumBaeEunHyeCe',
};

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 80;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled(motion.div)`
  padding: 40px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 476px;
  border-radius: 16px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
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
  width: 120px;
  color: var(--white);
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  background: var(--primary600);
  transition: 0.3s cubic-bezier(0.67, 0.07, 0.34, 0.98);

  &:hover {
    background: var(--primary800);
  }
`;

export const EditButton = styled(Button)`
  border: 1px solid var(--primary600);
  background: var(--white);
  color: var(--primary600);

  &:hover {
    background: var(--primary100);
  }
`;

export const DeleteButton = styled(Button)`
  background: var(--error);
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background: var(--error500);
  }
`;

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 10px;
  position: relative;
`;
