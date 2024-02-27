import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 60px;

  & + & {
    margin-top: 30px;
  }

  @media (max-width: 1280px) {
    padding: 0 24px;
    margin-top: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 60px 40px 80px 60px;
  background-color: var(--surface);
  border-radius: 16px;

  @media (max-width: 1280px) {
    display: block;
    padding: 40px 40px 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 24px 24px 50px;
  }
`;

export const Point = styled.span`
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 700;
  color: var(--white);
  background-color: var(--primary600);
  border-radius: 50px;

  @media (max-width: 768px) {
    padding: 4px 12px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 36px;
  margin: 16px 0 8px;
  color: var(--gray900);
  font-weight: 700;

  @media (max-width: 1280px) {
    br {
      display: none;
    }
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 28px;
    margin: 16px 0 4px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--gray500);

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

export const FirstSectionImage = styled.img`
  width: 640px;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 767px) {
    margin-top: 50px;
    width: calc(100% + 48px);
    transform: translateX(-24px);
  }
`;

export const SecondSectionImage = styled.img`
  width: 470px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const StyleButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 56px;
  margin-top: 48px;
  background-color: var(--primary600);
  color: var(--white);
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1280px) {
    width: calc(100% - 48px);
    margin-top: 72px;
  }
`;

export const EmojiWrapper = styled(Wrapper)`
  justify-content: center;
  gap: 125px;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;

    figure {
      margin-top: 36px;
    }
  }

  @media (max-width: 767px) {
    ${Title} br {
      display: block;
    }
  }
`;
