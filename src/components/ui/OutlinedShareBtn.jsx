import React, { useEffect, useRef, useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import KakaoShareButton from '@Components/PaperHeader/KakaoShareButton';
import Toast from './Toast';
import { SHARE_ICON_PATH } from './constant';

function OutlinedShareBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const ref = useRef(null);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && !event.target.closest('.shareBtn')) {
      setIsOpen(false);
    }
  };

  const handleCopy = () => {
    const currentUrl = window.location.href;
    copy(currentUrl);

    setIsCopied(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.ShareBtn onClick={handleSetIsOpen} className="shareBtn">
        <S.ButtonIconImg src={SHARE_ICON_PATH} alt="공유버튼 아이콘" />
      </S.ShareBtn>

      <S.Wrap hidden={!isOpen} ref={ref}>
        <KakaoShareButton />
        <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
      </S.Wrap>
      {isCopied && <Toast />}
    </>
  );
}

export default OutlinedShareBtn;
