import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--gray300);
`;

export const UnsplashIcon = styled.img`
  width: 30px;
  margin-right: 5px;
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
`;
