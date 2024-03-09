import React, { useEffect, useRef, useState } from 'react';
import * as S from './PreviewCard.style';

const BADGE_STYLE = {
  지인: {
    bgColor: 'var(--orange100)',
    textColor: 'var(--orange500)',
  },
  동료: {
    bgColor: 'var(--primary100)',
    textColor: 'var(--primary600)',
  },
  가족: {
    bgColor: 'var(--green100)',
    textColor: 'var(--green500)',
  },
  친구: {
    bgColor: 'var(--blue100)',
    textColor: 'var(--blue500)',
  },
};
const FONT_STYLE = {
  'Noto Sans': 'Noto Sans KR',
  Pretendard: 'Pretendard',
  나눔명조: 'NanumMyeongjo',
  '나눔손글씨 손편지체': 'NanumBaeEunHyeCe',
};
const DATE = new Date();
const TODAY = `${DATE.getFullYear()}.${DATE.getMonth() + 1}.${DATE.getDate()}`;
function PreviewCard({ information }) {
  const { sender, relationship, content, font, profileImageURL } = information;
  const [isVisible, setIsVisible] = useState(false);
  const messageBox = useRef(null);
  const card = useRef(null);
  useEffect(() => {
    messageBox.current.innerHTML = content;
  }, [content]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries, obseve) => {
        setIsVisible(entries[0].isIntersecting);
      },
      {
        threshold: 0.6,
      },
    );
    io.observe(card.current);
  }, []);
  return (
    <S.Card ref={card} visible={isVisible}>
      <S.SenderBox>
        <S.ProfileImg src={profileImageURL} />
        <S.Wrap>
          <S.Sender>
            From. <strong>{sender}</strong>
          </S.Sender>
          <S.Badge style={BADGE_STYLE[relationship]}>{relationship}</S.Badge>
        </S.Wrap>
      </S.SenderBox>
      <S.MessageBox ref={messageBox} font={FONT_STYLE[font]} />
      <S.CreateDate>{TODAY}</S.CreateDate>
    </S.Card>
  );
}

export default PreviewCard;
