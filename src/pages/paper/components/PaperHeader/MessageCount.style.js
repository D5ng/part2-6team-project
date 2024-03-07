import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const MessageCount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 11px;
  margin-right: 28px;
  p {
    color: var(--gray900);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    margin-left: 10px;
  }
  span {
    color: var(--gray900);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  @media ${device.tablet} {
    display: none;
  }
  &::after {
    content: '';
    width: 1px;
    height: 28px;
    background: var(--gray200);
    position: absolute;
    right: -28px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Profileimg = styled.div`
  img,
  div {
    position: absolute;
    width: 28px;
    height: 28px;
    border: 2px solid var(--white);
    border-radius: 16px;
  }
  .profileimg-0 {
    left: -75px;
    z-index: 1;
  }
  .profileimg-1 {
    left: -60px;
    z-index: 2;
  }
  .profileimg-2 {
    left: -45px;
    z-index: 3;
  }
  div {
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #e3e3e3;
    left: -30px;
    z-index: 4;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
