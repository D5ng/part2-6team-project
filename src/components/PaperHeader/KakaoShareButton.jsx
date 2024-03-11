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
    const createRollingPaperUrl = window.location.href.slice(0, window.location.href.indexOf('post') + 3);
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling Paper',
        description: '롤링 페이퍼를 작성해 보세요!!😊',
        imageUrl: '/images/home/home-manual-2.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      social: {
        likeCount: 999,
        commentCount: 999,
        sharedCount: 999,
      },
      buttons: [
        {
          title: '구경해보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: '나도 하나 써주기',
          link: {
            mobileWebUrl: `${window.location.href}/message`,
            webUrl: `${window.location.href}/message`,
          },
        },
        {
          title: '나도 롤링페이퍼 만들기',
          link: {
            mobileWebUrl: createRollingPaperUrl,
            webUrl: createRollingPaperUrl,
          },
        },
      ],
      installTalk: true,
    });
  };

  return <S.ShareOption onClick={handleKakaoShare}>카카오톡 공유</S.ShareOption>;
}

export default KakaoShareButton;
