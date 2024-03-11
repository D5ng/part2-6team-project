import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

const Primary = css`
  background: var(--primary600);
  color: var(--white);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  z-index: 9999;
  &:focus {
    border: 2px solid var(--primary900);
    background: var(--primary800);
  }
`;

export const PrimaryLink = styled(Link)`
  ${Primary}
  width: 280px;
  height: 56px;
  font-size: 18px;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 3;
  transition: 0.3s cubic-bezier(0.67, 0.07, 0.34, 0.98);

  &:hover {
    background: var(--primary800);
  }

  &:active {
    background: var(--primary800);
  }
  @media ${device.tablet} {
    position: fixed;
    bottom: 24px;
    left: 20px;
    width: calc(100% - 40px);
  }
  @media ${device.mobile} {
    position: fixed;
    bottom: 24px;
    left: 20px;
    width: calc(100% - 40px);
  }
`;

export const PrimaryCreateBtn = styled.button`
  ${Primary}
  width : 100%;
  height: 56px;
  font-size: 18px;
  border-radius: 12px;
  position: relative;
  z-index: 0;
  &:active {
    background: var(--primary800);
  }
  &:disabled {
    background: var(--gray300);
    cursor: not-allowed;
  }
  @media ${device.tablet} {
    position: fixed;
    bottom: 24px;
    left: 20px;
    width: calc(100% - 40px);
  }
  @media ${device.mobile} {
    position: fixed;
    bottom: 24px;
    left: 20px;
    width: calc(100% - 40px);
  }
`;

export const PrimaryCardModalBtn = styled.button`
  ${Primary}
  width : 120px;
  height: 40px;
  font-size: 16px;
  border-radius: 6px;
  margin: 31px auto 0;
  &:active {
    background: var(--primary800);
  }
  @media ${device.tablet} {
    margin: 24px auto 0;
  }
`;

export const PrimaryDeleteBtn = styled.button`
  ${Primary}
  width : 92px;
  height: 39px;
  font-size: 16px;
  border-radius: 6px;
  outline: none;
  &:active {
    background: var(--primary800);
  }
  @media ${device.tablet} {
    width: calc(100% - 48px);
    height: 56px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    position: fixed;
    bottom: 24px;
    left: 50%;
    z-index: 1000;
    transform: translateX(-50%);
  }
`;
