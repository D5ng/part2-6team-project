import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

const Primary = css`
  background: var(--primary600);
  color: var(--white);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border: 2px solid var(--primary900);
    background: var(--primary800);
  }
`;

export const PrimaryLink = styled(Link)`
  ${Primary}
  width: 280px;
  height: 56px;
  padding: 14px 24px;
  font-size: 18px;
  border-radius: 12px;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const PrimaryCreateBtn = styled.button`
  ${Primary}
  width : 100%;
  height: 56px;
  padding: 14px 24px;
  font-size: 18px;
  border-radius: 12px;
  outline: none;
  &:active {
    background: var(--primary800);
  }
  &:disabled {
    background: var(--gray300);
  }
`;

export const PrimaryCardModalBtn = styled.button`
  ${Primary}
  width : 120px;
  height: 40px;
  font-size: 16px;
  border-radius: 6px;
  outline: none;
  margin: 31px auto 0;
  @media ${device.tablet} {
    margin: 24px auto 0;
  }
`;
