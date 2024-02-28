import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import * as S from '@List/components/Paper.style';
import breakPoints from '@List/utils/swiper.breakpoints';

function PopularPaper() {
  // eslint-disable-next-line no-unused-vars
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
        <S.StyledSlide>Slide 1</S.StyledSlide>
        <S.StyledSlide>Slide 2</S.StyledSlide>
        <S.StyledSlide>Slide 3</S.StyledSlide>
        <S.StyledSlide>Slide 4</S.StyledSlide>
        <S.StyledSlide>Slide 5</S.StyledSlide>
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
