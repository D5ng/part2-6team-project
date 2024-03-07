import styled, { css, keyframes } from 'styled-components';

export const SkeletonContainer = styled.div`
  max-width: 1160px;
  width: 100%;
  min-height: 260px;
  margin: 16px auto 0;
  display: flex;
  justify-content: space-between;
`;

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

export const SkeletonItem = styled.div`
  width: 275px;
  height: 260px;
  background: var(--white);
  padding: 30px 30px 20px;
  border: 1px solid var(--gray200);

  border-radius: 16px;
`;

export const SkeletonRectangle = styled.div`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}px;
  background-color: var(--gray200);
  margin-bottom: 16px;
  ${SkeletonCss}
  &::after {
    ${After}
  }
`;

export const SkeletonBox = styled.div`
  padding-bottom: 65px;
  border-bottom: 1px solid var(--gray300);
`;

export const SkeletonEmojiBox = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const SkeletonEmoji = styled.span`
  display: inline-block;
  width: 62px;
  height: 36px;
  border-radius: 32px;
  background-color: var(--gray200);
  ${SkeletonCss}
  &::after {
    ${After}
  }
`;
