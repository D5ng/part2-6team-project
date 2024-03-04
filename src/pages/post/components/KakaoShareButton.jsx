import React, { useEffect } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';

function KakaoShareButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init('d11b4903076e86d84c122f16d9b2e6ff');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleKakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '카카오톡 공유하기 테스트',
        description: '카카오톡 공유하기 테스트입니다.',
        imageUrl: '이미지 URL',
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
