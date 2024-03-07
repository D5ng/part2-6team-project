import { InputElement } from '@Components/form/Input.style';
import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const UnsplashModal = styled.div`
  border-radius: 5px;
  background-color: white;
  width: 40vw;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media ${device.mobile} {
    width: 90%;
    height: 80%;
  }
`;

export const Body = styled.div`
  padding: 20px;
`;

export const ModalTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 14px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: 800;
`;

export const SearchBar = styled.form`
  position: relative;
  display: flex;
`;

export const Input = styled(InputElement)`
  width: 80%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const SearchButton = styled.button`
  width: 20%;
  background-color: rgba(0, 0, 0, 0.8);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
