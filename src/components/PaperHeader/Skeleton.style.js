import styled, { keyframes, css } from 'styled-components';
import { device } from 'styles/breakpoints';

export const SkeletonAnimation = keyframes`
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
`;
const TestImgStyle = `
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  border: 1.5px solid white;

  margin-right: -10px;
`;
const TopEmojiStyle = `
  width: 65px;  
  height: 36px;
  border-radius: 32px;
`;

const PseudoElement = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, rgba(238, 238, 238, 1) 0%, rgba(224, 224, 224, 1) 100%);
  animation: ${SkeletonAnimation} 2s infinite linear;
`;

const animationCSS = css`
  position: relative;
  overflow: hidden;
  background-color: var(--gray200);
`;

export const SkeletonHeader = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 68px;
  display: flex;
  padding: 13px 0;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    padding: 13px 24px;
  }

  @media ${device.mobile} {
    padding: 12px 0px;
    flex-direction: column;
    height: 104px;
  }
`;

export const Title = styled.div`
  width: 180px;
  height: 35px;
  border-radius: 5px;

  ${animationCSS}

  &::after {
    ${PseudoElement}
  }
`;

export const NavContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: auto;
  @media ${device.mobile} {
    width: 100%;
    padding: 8px 30px 8px 35px;
    height: 52px;
    border-top: 1px solid #ededed;
  }
`;

export const MassageCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Img1 = styled.div`
  ${TestImgStyle}
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
export const Img2 = styled.div`
  ${TestImgStyle}
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;

export const Img3 = styled.div`
  ${TestImgStyle}
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
export const ImgCount = styled.div`
  ${TestImgStyle}
  ${animationCSS}
&::after {
    ${PseudoElement}
  }
`;
export const Count = styled.div`
  width: 140px;
  height: 20px;
  margin-left: 15px;
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;

export const TopEmojis1 = styled.div`
  margin-left: 70px;
  ${TopEmojiStyle}
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
export const TopEmojis2 = styled.div`
  margin: 0 8px;
  ${TopEmojiStyle}
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
export const TopEmojis3 = styled.div`
  ${TopEmojiStyle}
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;

export const EmojiCount = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-left: 10px;
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
export const EmojiAddBtn = styled.div`
  margin-left: 12px;
  width: 94px;
  height: 38px;
  border-radius: 6px;
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
export const ShareBtn = styled.div`
  margin-left: 28px;
  width: 58px;
  height: 38px;
  border-radius: 6px;
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;
