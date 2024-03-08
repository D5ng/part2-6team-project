import React from 'react';
import * as S from 'pages/home/Home.style';

function Home() {
  return (
    <>
      <S.Section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          duration: 0.7,
          staggerChildren: 0.5,
        }}
      >
        <S.Wrapper>
          <div>
            <S.Point>Point. 01</S.Point>
            <S.Title>
              누구나 손쉽게, 온라인
              <br />
              롤링 페이퍼를 만들 수 있어요
            </S.Title>
            <S.Description>로그인 없이 자유롭게 만들어요.</S.Description>
          </div>
          <figure>
            <S.FirstSectionImage src="/images/home/home-manual-1.svg" alt="롤링 페이퍼 사용 이미지" />
            <figcaption className="ir_so">롤링페이퍼</figcaption>
          </figure>
        </S.Wrapper>
      </S.Section>

      <S.Section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          delay: 0.4,
          duration: 0.7,
          staggerChildren: 0.5,
        }}
      >
        <S.EmojiWrapper>
          <figure>
            <S.SecondSectionImage src="/images/home/home-manual-2.png" alt="롤링페이퍼 사용 이미지" />
            <figcaption className="ir_so">롤링페이퍼</figcaption>
          </figure>
          <div>
            <S.Point>Point. 02</S.Point>
            <S.Title>
              서로에게 이모지로 감정을
              <br />
              표현해보세요
            </S.Title>
            <S.Description>롤링 페이퍼에 이모지를 추가할 수 있어요.</S.Description>
          </div>
        </S.EmojiWrapper>
      </S.Section>

      <S.MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          delay: 0.8,
          duration: 0.7,
          staggerChildren: 0.5,
        }}
      >
        <S.StyleButton to="/list">구경해보기</S.StyleButton>
      </S.MotionWrapper>
    </>
  );
}

export default Home;
