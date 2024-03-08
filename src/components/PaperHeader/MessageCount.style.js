import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const MessageCount = styled.div`
  display: flex;
  position: relative;
  gap: 11px;
  margin-right: 55px;
  &::after {
    content: '';
    width: 1px;
    height: 28px;
    background: red;
    background: var(--gray200);
    position: absolute;
    right: -28px;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const MessageCountText = styled.p`
  color: var(--gray900);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  margin-left: 10px;
  span {
    color: var(--gray900);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
`;
