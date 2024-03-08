import styled from 'styled-components';
import { PlusIcon } from '@Components/ui/PlusIcon.style';
import { Link } from 'react-router-dom';
import { device } from 'styles/breakpoints';

export const GridLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 384px);
  gap: 24px;
  position: relative;

  @media ${device.tablet} {
    padding: 0 3.125vw;
    grid-template-columns: repeat(2, 45.8333vw);
    gap: 2.083vw;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 88.8888vw);
    padding: 0 5.5555vw;
    gap: 4.4444vw;
  }
`;

export const CreatePaperArea = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
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

export const ObserverTarget = styled.div`
  margin: 24px 0 0 0;
`;
