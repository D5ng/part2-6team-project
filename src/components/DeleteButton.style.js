import styled from 'styled-components';

export const DeleteButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--gray100);
  }
  &:active {
    background-color: var(--gray100);
  }
  &:focus {
    border-color: var(--gray500);
  }
  &:disabled {
    background-color: var(--gray300);
    cursor: not-allowed;
  }
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  filter: grayscale(100%);
`;
