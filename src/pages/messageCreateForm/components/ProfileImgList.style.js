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
  border-radius: 50%;
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  isolation: isolate;
  &:last-child {
    overflow: visible;
  }
  @media ${device.mobile} {
    max-width: 60px;
    width: 100%;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  transition: 0.5s;
  -webkit-user-drag: none;
  &:hover {
    transform: scale(1.3);
  }
`;

export const SearchBtb = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--gray300);
  padding: 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: var(--primary300);
    bottom: -35%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    visibility: hidden;
  }
  &::after {
    content: '🔍사진 검색';
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: var(--primary300);
    visibility: hidden;
  }
  &:hover::after,
  &:hover::before {
    visibility: visible;
  }
  @media ${device.mobile} {
    max-width: 60px;
    width: 100%;
    height: 100%;
    &::after {
      display: none;
    }
  }
`;

export const SearchImg = styled.img`
  width: 100%;
  transition: 0.5s;
  -webkit-user-drag: none;
  &:hover {
    transform: scale(1.2);
  }
  @media ${device.mobile} {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;
