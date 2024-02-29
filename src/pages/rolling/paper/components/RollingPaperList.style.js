import styled from 'styled-components';
import { PlusIcon } from '@Components/ui/PlusIcon.style';
import { Link } from 'react-router-dom';

export const GridLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 384px);
  gap: 24px;
`;

export const CreatePaperArea = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  background-color: var(--white);
  border-radius: 16px;
`;

export const Button = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${PlusIcon} {
    background-color: var(--gray600);
  }
`;
