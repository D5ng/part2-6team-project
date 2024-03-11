import { InputElement } from '@Components/form/Input.style';
import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const UnsplashModal = styled.div`
  border-radius: 5px;
  background-color: white;
  max-width: 600px;
  width: 90%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media ${device.mobile} {
    width: 90%;
  }
`;

export const Body = styled.div`
  padding: 15px;

  @media (${device.mobile}) {
    padding: 10px;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 14px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: 700;
`;

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  height: 48px;

  @media (${device.mobile}) {
    height: 40px;
  }
`;

export const Input = styled(InputElement)`
  width: 80%;
  height: 100%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  @media (${device.mobile}) {
    font-size: 14px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const SearchButton = styled.button`
  width: 20%;
  background-color: rgba(0, 0, 0, 0.8);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  color: white;

  @media (${device.mobile}) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
  }
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 7px;
  background-color: var(--black);
  color: var(--white);

  &:disabled {
    background: var(--gray300);
    cursor: not-allowed;
  }
`;
