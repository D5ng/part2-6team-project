import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import * as S from '@List/components/Paper.style';
import breakPoints from '@List/utils/swiper.breakpoints';
import Card from '@Components/pageCard/PageCard';

function PopularPaper({ papers }) {
  const [_, setInit] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <S.SwiperWrapper>
      <S.StyledSwiper
        onInit={() => setInit(true)}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={breakPoints}
        modules={[Navigation]}
        className="mySwiper"
      >
        {papers.map((list) => (
          <S.StyledSlide key={list.id}>
            <Card list={list} />
          </S.StyledSlide>
        ))}
      </S.StyledSwiper>

      <S.PrevButton ref={navigationPrevRef}>
        <img src="/images/icons/swiper-arrow-next.svg" alt="이전 슬라이드로 이동하기" />
      </S.PrevButton>
      <S.NextButton ref={navigationNextRef}>
        <img src="/images/icons/swiper-arrow-next.svg" alt="다음 슬라이드로 이동하기" />
      </S.NextButton>
    </S.SwiperWrapper>
  );
}

export default PopularPaper;
