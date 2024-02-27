import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid #ededed;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 28px;
  height: 28px;
`;

export const Text = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-left: 8px;
  color: var(--gray90);
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
`;
