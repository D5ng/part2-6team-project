import React, { useEffect, useContext } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import { KAKAO_SDK_URL, KAKAO_APP_KEY } from '@Components/PaperHeader/constant';

function KakaoShareButton({ emojiCount, messageCount }) {
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
    const createRollingPaperUrl = window.location.href.slice(0, window.location.href.indexOf('post') + 4);
    const likeCounts = emojiCount.reduce((total, item) => total + item.count, 0);
    console.log(`${likeCounts}, ${messageCount}`);

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling Paper',
        description: '나만의 롤링페이퍼를 작성해 보세요!!😊 #롤링 #페이퍼 #작성하기',
        imageUrl: 'https://part2-6team-project.vercel.app/images/home/rolling2.jpg',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      social: {
        likeCount: likeCounts,
        commentCount: messageCount,
      },
      buttons: [
        {
          title: '글 추가하기',
          link: {
            mobileWebUrl: `${window.location.href}/message`,
            webUrl: `${window.location.href}/message`,
          },
        },
        {
          title: '롤페 만들기',
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
