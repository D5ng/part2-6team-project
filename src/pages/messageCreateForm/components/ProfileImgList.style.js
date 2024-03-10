import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const ProfileImgList = styled.ul`
  display: flex;
  gap: 4px;
  flex: 1;
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    gap: 10px;
  }
`;

export const ListItem = styled.li`
  width: 56px;
  aspect-ratio: 1/1;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
  @media ${device.mobile} {
    max-width: 60px;
    width: 100%;
  }
`;
export const ProfileImg = styled.img`
  width: 100%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.3);
  }
`;

export const SearchBtb = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: var(--gray300);
  padding: 8px;
  @media ${device.mobile} {
    max-width: 60px;
    width: 100%;
    height: 100%;
    /* aspect-ratio: 1/1; */
  }
`;

export const SearchImg = styled.img`
  width: 100%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
  @media ${device.mobile} {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;
