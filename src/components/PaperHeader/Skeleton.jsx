import React, { forwardRef } from 'react';
import * as S from '@Components/PaperHeader/Skeleton.style';

function Skeleton(props, ref) {
  return (
    <S.SkeletonHeader ref={ref}>
      <S.Title />
      <S.NavContents>
        <S.MassageCount>
          <S.Img1 />
          <S.Img2 />
          <S.Img3 />
          <S.ImgCount />
          <S.Count />
        </S.MassageCount>
        <S.TopEmojis1 />
        <S.TopEmojis2 />
        <S.TopEmojis3 />
        <S.EmojiCount />
        <S.EmojiAddBtn />
        <S.ShareBtn />
      </S.NavContents>
    </S.SkeletonHeader>
  );
}

export default forwardRef(Skeleton);
