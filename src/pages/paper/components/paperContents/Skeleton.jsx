import React, { forwardRef } from 'react';
import * as S from '@Pages/paper/components/paperContents/Skeleton.style';

function Skeleton(props, ref) {
  return (
    <S.SkeletonItem ref={ref}>
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

export default forwardRef(Skeleton);
