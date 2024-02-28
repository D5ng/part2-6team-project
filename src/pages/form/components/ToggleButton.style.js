import styled from 'styled-components';

export const ToggleButton = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--white)' : 'var(--gray100)')};
  color: ${({ $isSelected }) => ($isSelected ? 'var(--primary600)' : 'black')};
  border: ${({ $isSelected }) => ($isSelected ? '2px solid' : 'black')};
  font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 400)};

  width: 122px;
  height: 40px;
  border-radius: 6px;
  font-size: 16px;
`;
