import styled, { keyframes, css } from 'styled-components';

export const SkeletonAnimation = keyframes`
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
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

export const SkeletonItem = styled.li`
  ${animationCSS}
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background-color: var(--white);
  padding: 28px 24px;
  box-shadow:
    0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
`;

export const SkeletonHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--gray200);
  padding-bottom: 15px;
`;

export const Image = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  ${animationCSS}

  &::after {
    ${PseudoElement}
  }
`;

export const HeaderContents = styled.div`
  margin-left: 16px;
`;

export const Title = styled.div`
  width: 150px;
  height: 24px;
  ${animationCSS}
  &::after {
    ${PseudoElement}
  }
`;

export const Badge = styled.div`
  width: 41px;
  height: 20px;
  margin-top: 6px;
  ${animationCSS}

  &::after {
    ${PseudoElement}
  }
`;

export const SkeletonBody = styled.div`
  margin-top: 16px;
`;

export const Contents = styled.div`
  width: ${({ $width }) => `${$width}%`};
  height: 24px;
  ${animationCSS}

  &::after {
    ${PseudoElement}
  }

  & + & {
    margin-top: 10px;
  }
`;

export const Date = styled.div`
  ${animationCSS}
  position: absolute;
  bottom: 28px;
  left: 24px;
  width: 100px;
  height: 24px;

  &::after {
    ${PseudoElement}
  }
`;
