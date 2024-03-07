import { animationCSS } from '@Pages/paper/components/Skeleton.style';
import React, { forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const SkeletonAnimation = keyframes`
  0% {
    top: -100%;
  }

  100% {
    top: 100%;
  }
`;

const PseudoElement = css`
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(238, 238, 238, 1) 0%, rgba(224, 224, 224, 1) 100%);
  animation: ${SkeletonAnimation} 2s infinite ease-in-out;
`;

const SkeletonItem = styled.div`
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  background-color: var(--gray100);
  ${animationCSS}

  &::after {
    ${PseudoElement}
  }
`;

function UnsplashSkeleton(props, ref) {
  const randomHeight = Math.floor(Math.random() * 200 + 100);
  return <SkeletonItem ref={ref} $height={randomHeight} />;
}

export default forwardRef(UnsplashSkeleton);
