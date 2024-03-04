import styled from 'styled-components';

export const ModalLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  width: 350px;
  aspect-ratio: 1/1.612;
  background: var(--white);
  border-radius: 8px;
  padding: 16px;
  position: relative;
`;
export const CloseModalBtn = styled.button`
  padding: 5px;
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
`;
export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--gray300);
`;

export const ImgList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  height: 100%;
  overflow-y: scroll;
  gap: 8px;
  padding-top: 24px;
`;

export const ImgItem = styled.li`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
