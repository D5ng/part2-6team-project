import React from 'react';
import * as S from './Loading.style';

function Loading({ isCenter = true, size = 35 }) {
  return (
    <S.Loader $isCenter={isCenter} $size={size}>
      <S.Circular viewBox="25 25 50 50">
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="white"
        />
      </S.Circular>
    </S.Loader>
  );
}

export default Loading;
