import React, { useEffect, useRef, useState, useContext } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import KakaoShareButton from '@Components/PaperHeader/KakaoShareButton';
import { PaperContext } from '@Paper/context/PaperContext';
import Toast from './Toast';
import { SHARE_ICON_PATH } from './constant';

function OutlinedShareBtn({ emojiCount }) {
  const [isHidden, setIsHidden] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const { paperState } = useContext(PaperContext);
  const { messageCount } = paperState?.data || {};

  const handleSetIsOpen = () => {
    setIsHidden(!isHidden);
  };

  const handleClickOutside = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsHidden(true);
    }
  };

  const handleCopy = () => {
    const currentUrl = window.location.href;
    copy(currentUrl);

    setIsCopied(true);
    setIsHidden(true);
    setIsOpen(true);
    setTimeout(() => {
      setIsCopied(false);
      setIsOpen(false);
    }, 5000);
  };

  const handleCloseToast = () => {
    setIsCopied(false);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.ShareBtn onClick={handleSetIsOpen} ref={buttonRef}>
        <S.ButtonIconImg src={SHARE_ICON_PATH} alt="공유버튼 아이콘" />
      </S.ShareBtn>

      <S.Wrap hidden={isHidden} ref={wrapRef}>
        <KakaoShareButton emojiCount={emojiCount} messageCount={messageCount} />
        <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
      </S.Wrap>
      {isCopied && <Toast onClose={handleCloseToast} isOpen={isOpen} />}
    </>
  );
}

export default OutlinedShareBtn;
