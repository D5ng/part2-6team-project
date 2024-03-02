import styled from 'styled-components';

export const ImagePickerModal = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: white;
  width: 500px;
  height: 800px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  overflow: hidden;
  box-shadow:
    0 3px 4px 4px rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);

  padding-bottom: 80px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 18px 20px;
  margin-bottom: 15px;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 7px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 30px;
`;

export const ImageLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  overflow-y: auto;
  height: 100%;
  padding: 0 10px;
  &::-webkit-scrollbar {
    width: 10px;
    height: 80px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray300);
    border-radius: 10px;
  }
`;

export const ImageList = styled.img``;
