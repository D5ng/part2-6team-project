import React, { useRef, useState, useEffect } from 'react';
import { Navigation, Virtual } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

import * as S from '@List/components/Paper.style';
import breakPoints from '@List/utils/swiper.breakpoints';
import PaperCard from '@Components/paperCard/PaperCard';

let swiperModul = null;

function PopularPaper({ papers }) {
  const [_, setInit] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth < 1290) {
      swiperModul = false;
    } else {
      swiperModul = true;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);

  return (
    <S.SwiperWrapper>
      <S.StyledSwiper
        onInit={() => setInit(true)}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={breakPoints}
        className="mySwiper"
        modules={swiperModul ? [(Navigation, Virtual)] : null}
        virtual={swiperModul ? true : null}
      >
        {papers.map((list) => (
          <S.StyledSlide key={list.id}>
            <PaperCard list={list} />
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
