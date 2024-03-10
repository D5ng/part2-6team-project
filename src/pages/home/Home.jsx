import React from 'react';
import * as S from 'pages/home/Home.style';
import PrimaryLink from '@Components/ui/PrimaryLink';
import MetaTag from '@Pages/SEOMetaTag';

function Home() {
  return (
    <>
      <MetaTag title="롤링 페이퍼" description="롤링 페이퍼를 작성해 친구들에게 공유 해보세요." />
      <S.Section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          duration: 0.7,
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
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          delay: 0.4,
          duration: 0.7,
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

      <S.LinkArea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          delay: 0.7,
          duration: 0.7,
        }}
      >
        <PrimaryLink url="/list">구경해보기</PrimaryLink>
      </S.LinkArea>
    </>
  );
}

export default Home;
