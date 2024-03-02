import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const BackgroundOptions = styled.ul`
  display: flex;
  gap: 16px;
  padding: 45px 0 70px;
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
    padding: 28px 0 80px;
  }
`;

export const BackgroundOption = styled.li`
  position: relative;
`;

export const ColorList = styled.div`
  background-color: ${({ color }) => color || 'rgba(0, 0, 0, 0.1)'};
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
    height: 42.7777vw;
  }
`;

export const ImageList = styled.img`
  background-color: rgba(0, 0, 0, 0.1);
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.mobile} {
    width: 100%;
    height: 42.7777vw;
  }
`;

export const Option = styled.li``;

export const SearchIcon = styled.img`
  width: 80px;
  height: 80px;
  opacity: 0.3;
`;

export const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
`;
