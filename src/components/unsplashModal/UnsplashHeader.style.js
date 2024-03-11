import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'styles/breakpoints';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--gray300);

  @media (${device.mobile}) {
    padding: 10px;
  }
`;

export const UnsplashIcon = styled.img`
  width: 30px;
  margin-right: 10px;

  @media (${device.mobile}) {
    width: 24px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (${device.mobile}) {
    width: 24px;
    height: 24px;
  }
`;
