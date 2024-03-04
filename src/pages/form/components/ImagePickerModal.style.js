import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const ImagePickerModal = styled.div`
  border-radius: 4px;
  background-color: white;
  padding-bottom: 160px;
  width: 700px;
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

  @media ${device.mobile} {
    width: 90%;
    height: 80%;
  }
`;

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 20px;
  top: 11px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 30px;
  width: 33px;
  height: 33px;
  cursor: pointer;
`;

export const UnsplashIcon = styled.img`
  width: 28px;
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
  padding: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SearchButton = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 13px;
  right: 13px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 50px;
  width: 100px;
  font-size: 18px;
  font-weight: 600;
  color: white;
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
export const ImageList = styled.li`
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img``;
