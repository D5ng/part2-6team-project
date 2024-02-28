import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

const Outlined = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray300);
  padding: 6px 16px;
  border-radius: 6px;
  outline: none;
  &:focus {
    border: 1px solid var(--gray500);
  }
  &:hover {
    background: var(--gray100);
  }
`;

export const ShareBtn = styled.button`
  ${Outlined}
  position: relative;
  @media ${device.mobile} {
    padding: 6px 8px;
  }
`;

export const ShareIconImg = styled.img`
  width: 24px;
  @media ${device.mobile} {
    width: 20px;
  }
`;

export const Wrap = styled.div`
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  padding: 10px 0;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background: var(--white);
  position: absolute;
  top: calc(100% + 12px);
  right: -12px;
`;

export const ShareOption = styled.button`
  width: 138px;
  padding: 12px 16px;
  text-align: left;
  color: var(--gray900);
  font-size: 16px;
  &:hover {
    background: var(--gray100);
  }
`;
