import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const DeleteButton = styled.button`
  padding: 6px 16px;
  outline: none;
  border: 1px solid var(--gray300);
  border-radius: 6px;
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
    right: 20px;
  }
`;

export const DeleteIcon = styled.img`
  width: 24px;
  @media ${device.mobile} {
    width: 20px;
  }
`;
