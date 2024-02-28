import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

const Primary = css`
  background: var(--primary600);
  color: var(--white);
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const PrimaryLink = styled(Link)`
  ${Primary}
  width: 280px;
  height: 56px;
  padding: 14px 24px;
  font-size: 18px;
  border-radius: 12px;
  @media ${device.tablet} {
    width: calc(100% - 48px);
  }
`;

export const PrimaryCreateBtn = styled.button``;
