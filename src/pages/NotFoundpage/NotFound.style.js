import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'styles/breakpoints';

export const NotFound = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media ${device.tablet} {
    padding: 0 24px;
  }

  @media ${device.mobile} {
    display: grid;
    gap: 0px;
    padding: 0 20px;
    grid-template-areas:
      'Img'
      'Title';
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
  margin: 200px 0px;
  h1 {
    font-size: 60px;
    font-weight: 900;
  }
  p {
    font-size: 30px;
    font-weight: 600;
    margin-top: 20px;
  }
  @media ${device.mobile} {
    margin-top: 10px;
    margin-bottom: 100px;
    grid-area: Title;
    h1 {
      font-size: 40px;
    }
  }
`;
export const Button = styled(Link)`
  font-size: 25px;
  font-weight: 400;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--primary500);
  margin-top: 40px;
`;
export const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  @media ${device.mobile} {
    grid-area: Img;
  }
`;
