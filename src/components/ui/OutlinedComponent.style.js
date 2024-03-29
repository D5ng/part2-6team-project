import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

const Outlined = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ShareBox = styled.div`
  ${Outlined}
  position: relative;
`;

export const ShareBtn = styled.button`
  padding: 6px 16px;
  outline: none;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  margin-right: 13px;
  &:focus {
    border: 1px solid var(--gray500);
  }
  &:hover {
    background: var(--gray100);
  }
  @media ${device.mobile} {
    padding: 6px 8px;
    position: absolute;
    top: 8px;
    right: 55px;
  }
`;

export const ButtonIconImg = styled.img`
  width: 24px;
  @media ${device.mobile} {
    width: 20px;
  }
`;

export const Wrap = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  padding: 10px 0;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background: var(--white);
  position: absolute;
  top: calc(100% + 12px);
  right: 0px;
  @media ${device.tablet} {
    right: 15px;
  }
`;
export const EmojiChoiceBox = styled.div`
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  position: absolute;
  top: calc(100% + 12px);
  right: 0px;
  @media ${device.tablet} {
    right: 15px;
  }
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

export const EmojiAddBtn = styled.button`
  ${Outlined}
  position: relative;
  padding: 6px 16px;
  gap: 4px;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  margin-right: 26px;
  &:focus {
    border: 1px solid var(--gray500);
  }
  &:hover {
    background: var(--gray100);
  }
  &::after {
    content: '';
    width: 1px;
    height: 28px;
    background: var(--gray200);
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${device.mobile} {
    padding: 6px 8px;
    margin-right: 0px;
    &::after {
      right: 0px;
    }
  }
`;

export const AddText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: var(--gray900);
  @media ${device.mobile} {
    display: none;
  }
`;
