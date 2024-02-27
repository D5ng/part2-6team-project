import styled from 'styled-components';

export const AddButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: var(--gray500);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--gray600);
  }
  &:active {
    background-color: var(--gray700);
  }
  &:focus {
    background-color: var(--gray800);
  }
  &:disabled {
    background-color: var(--gray300);
    cursor: not-allowed;
  }
`;

export const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
`;
