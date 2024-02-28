import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';

function OutlinedShareBtn({ kakaoApi, cloneURL }) {
  const [hidden, setHidden] = useState(true);
  return (
    <S.ShareBtn onClick={() => setHidden(!hidden)}>
      <S.ShareIconImg src="/images/icons/shareIcon.svg" />
      <S.Wrap hidden={hidden}>
        <S.ShareOption onClick={kakaoApi}>카카오톡 공유</S.ShareOption>
        <S.ShareOption onClick={cloneURL}>URL 공유</S.ShareOption>
      </S.Wrap>
    </S.ShareBtn>
  );
}

export default OutlinedShareBtn;
