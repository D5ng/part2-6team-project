import React, { useEffect } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import { KAKAO_SDK_URL, KAKAO_APP_KEY, LOGO_ICON_PATH } from '@Components/PaperHeader/constant';

function KakaoShareButton() {
  useEffect(() => {
    const loadKakaoScript = () => {
      const script = document.createElement('script');
      script.src = KAKAO_SDK_URL;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.Kakao.init(KAKAO_APP_KEY);
      };

      return () => {
        document.head.removeChild(script);
      };
    };

    loadKakaoScript();
  }, []);

  const handleKakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '카카오톡 공유하기 테스트',
        description: '카카오톡 공유하기 테스트입니다.',
        imageUrl: LOGO_ICON_PATH,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
    });
  };

  return <S.ShareOption onClick={handleKakaoShare}>카카오톡 공유</S.ShareOption>;
}

export default KakaoShareButton;
