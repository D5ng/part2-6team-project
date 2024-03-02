import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const ProfileImgList = styled.ul`
  display: flex;
  gap: 4px;
  flex: 1;
  @media ${device.mobile} {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const ListItem = styled.li`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 100%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.3);
  }
`;
