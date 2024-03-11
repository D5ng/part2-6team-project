import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'styles/breakpoints';

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media ${device.tablet} {
    padding: 0 24px;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: var(--surface);
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 45px;
    font-weight: 900;
  }
  p {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }
`;
export const Button = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: var(--white);
  padding: 10px 30px;
  border-radius: 10px;
  background: var(--primary500);
  margin-top: 25px;
`;
export const Image = styled.img`
  width: 450px;
  height: 250px;
  object-fit: contain;
`;
