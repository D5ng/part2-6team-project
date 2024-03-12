import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const ImageList = styled.div`
  margin: 20px 0;
  height: 60vh;
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 10px;
    height: 80px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray300);
    border-radius: 10px;
  }

  @media (${device.mobile}) {
    margin: 10px 0;
    height: 55vh;
  }
`;
export const ImageItem = styled.div`
  position: relative;
  cursor: pointer;

  &::after {
    ${({ $isSelected }) =>
      $isSelected &&
      `
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 44px;
      height: 44px;
      background: url("/images/icons/check.svg") no-repeat center;
    `}
  }
`;

export const Image = styled.img`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || 1};
  pointer-events: none;
`;

export const Observer = styled.div`
  height: 1px;
`;
