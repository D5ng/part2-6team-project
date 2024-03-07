import React from 'react';
import * as S from './SkeletonUI.style';

function SkeletonList() {
  return (
    <S.SkeletonContainer>
      {Array(4)
        .fill()
        .map((_, i) => (
          <S.SkeletonItem key={i}>
            <S.SkeletonBox>
              <S.SkeletonRectangle width={70} height={30} />
              <S.SkeletonRectangle width={45} height={20} />
            </S.SkeletonBox>
            <S.SkeletonEmojiBox>
              <S.SkeletonEmoji />
              <S.SkeletonEmoji />
              <S.SkeletonEmoji />
            </S.SkeletonEmojiBox>
          </S.SkeletonItem>
        ))}
    </S.SkeletonContainer>
  );
}

export default SkeletonList;
