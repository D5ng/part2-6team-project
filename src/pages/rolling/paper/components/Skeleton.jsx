import React from 'react';
import * as S from '@Paper/components/Skeleton.style';

function Skeleton() {
  return (
    <S.SkeletonItem>
      <S.SkeletonHeader>
        <S.Image />
        <S.HeaderContents>
          <S.Title />
          <S.Badge />
        </S.HeaderContents>
      </S.SkeletonHeader>
      <S.SkeletonBody>
        <S.Contents $width={100} />
        <S.Contents $width={90} />
        <S.Contents $width={80} />
      </S.SkeletonBody>
      <S.Date />
    </S.SkeletonItem>
  );
}

export default Skeleton;
