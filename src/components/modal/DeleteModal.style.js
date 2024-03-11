import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Container = styled.div`
  padding: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
  border-radius: 16px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 100;
  @media ${device.mobile} {
    width: 80%;
    padding-bottom: 20px;
  }
`;

export const DeleteIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #5a5a5a;
  font-size: 18px;
  height: 300px;
`;
export const MainText = styled.p`
  font-weight: 800;
  font-size: 23px;
  margin: 15px 0;
`;
export const SubText = styled.p`
  font-size: 15px;
  margin-bottom: 8px;
  color: var(--gray400);
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 140px;
  height: 45px;
  color: var(--gray500);
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 18px;
  font-style: normal;
  line-height: 26px;
  background: rgba(0, 0, 0, 0.1);
  font-weight: 500;
  @media ${device.mobile} {
    width: 120px;
  }
`;
export const DeleteButton = styled(Button)`
  background: #f24646;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media ${device.mobile} {
    gap: 10px;
  }
`;
