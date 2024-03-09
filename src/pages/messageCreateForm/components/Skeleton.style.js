import styled, { css, keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
    0%{
        left : 0;
    }
    100%{
        left : 100%;
    }
`;
const SkeletonCss = css`
  position: relative;
  overflow: hidden;
`;

const After = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, rgba(238, 238, 238, 1) 0%, rgba(224, 224, 224, 1) 100%);
  animation: ${SkeletonAnimation} infinite 1.5s;
`;
// eslint-disable-next-line import/prefer-default-export
export const SkeletonItem = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  background: var(--gray200);
  border-radius: 100px;
  ${SkeletonCss}
  &::after {
    ${After}
  }
`;
