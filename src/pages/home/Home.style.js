import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'styles/breakpoints';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  margin-top: 60px;

  & + & {
    margin-top: 30px;
  }

  @media ${device.tablet} {
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

  @media ${device.tablet} {
    display: block;
    padding: 40px 40px 60px 40px;
  }

  @media ${device.mobile} {
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

  @media ${device.mobile} {
    padding: 4px 12px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 36px;
  margin: 16px 0 8px;
  color: var(--gray900);
  font-weight: 700;

  @media ${device.tablet} {
    br {
      display: none;
    }
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 28px;
    margin: 16px 0 4px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--gray500);

  @media ${device.mobile} {
    font-size: 15px;
    line-height: 22px;
  }
`;

export const FirstSectionImage = styled.img`
  width: 640px;

  @media ${device.tablet} {
    width: 100%;
    margin-top: 40px;
  }

  @media ${device.mobile} {
    margin-top: 50px;
    width: calc(100% + 48px);
    transform: translateX(-24px);
  }
`;

export const SecondSectionImage = styled.img`
  width: 470px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const MotionWrapper = styled(motion.div)``;

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
  position: relative;
  overflow: hidden;
  z-index: 3;
  transition: 0.3s cubic-bezier(0.67, 0.07, 0.34, 0.98);

  &:hover {
    background: var(--primary800);
  }

  @media ${device.tablet} {
    width: calc(100% - 48px);
    margin-top: 72px;
  }
`;

export const EmojiWrapper = styled(Wrapper)`
  justify-content: center;
  gap: 125px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;

    figure {
      margin-top: 36px;
    }
  }

  @media ${device.mobile} {
    ${Title} br {
      display: block;
    }
  }
`;

// export const LinkArea = styled.div`
//   text-align: center;
//   margin-top: 64px;

//   @media ${device.tablet} {
//     padding: 0 24px;
//   }
// `;

export const LinkArea = styled(motion.div)`
  text-align: center;
  margin-top: 44px;

  @media ${device.tablet} {
    padding: 0 24px;
  }
`;
