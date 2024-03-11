import styled from 'styled-components';
import { device } from 'styles/breakpoints';
import { Link } from 'react-router-dom';

export const RollingListContainer = styled.div`
  margin-bottom: 130px;
`;

export const Section = styled.section`
  margin-top: 50px;

  @media ${device.mobile} {
    margin-top: 40px;

    & + & {
      margin-top: 74px;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;

  @media ${device.tablet} {
    margin-left: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const LinkArea = styled.div`
  display: flex;
  gap: 55px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 64px;

  @media ${device.tablet} {
    padding: 0 24px;
  }
`;

export const AllPaperLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  width: 280px;
  height: 56px;
  font-size: 18px;
  border-radius: 12px;
  border: 1px solid var(--gray300);
  margin-left: auto;
  z-index: 3;
  transition: 0.3s cubic-bezier(0.67, 0.07, 0.34, 0.98);

  @media ${device.tablet} {
    position: fixed;
    bottom: 93px;
    left: 20px;
    width: calc(100% - 40px);
  }
  @media ${device.mobile} {
    position: fixed;
    bottom: 93px;
    left: 20px;
    width: calc(100% - 40px);
  }
`;
