import React, { useState, useEffect, useRef } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import KakaoShareButton from '@Pages/paper/components/paperHeader/KakaoShareButton';
import Toast from './Toast';
import { SHARE_ICON_PATH } from './constant';

function OutlinedShareBtn() {
  const [isShareVisible, setShareVisibility] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapRef.current && !wrapRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setShareVisibility(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapRef]);

  const toggleShareButton = () => {
    setShareVisibility((prevHidden) => !prevHidden);
  };

  const handleCopy = () => {
    const currentUrl = window.location.href;

    copy(currentUrl);

    setIsCopied(true);
    setShareVisibility(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <>
      <S.ShareBtn onClick={toggleShareButton} ref={buttonRef}>
        <S.ButtonIconImg src={SHARE_ICON_PATH} alt="공유버튼 아이콘" />
      </S.ShareBtn>
      <S.Wrap hidden={isShareVisible} ref={wrapRef}>
        <KakaoShareButton />
        <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
      </S.Wrap>
      {isCopied && <Toast />}
    </>
  );
}

export default OutlinedShareBtn;
