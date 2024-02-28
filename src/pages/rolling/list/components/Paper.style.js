import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrapper = styled.div`
  width: 1200px;
  margin: 16px auto 0 auto;
  position: relative;
`;

export const StyledSwiper = styled(Swiper)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1160px;
`;

export const StyledSlide = styled(SwiperSlide)`
  width: 275px !important;
  height: 260px;
  border-radius: 16px;
  background-color: var(--gray300);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #dadcdf;
  background-color: var(--white);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 16px;
    height: 16px;
  }

  &.swiper-button-disabled {
    opacity: 0.5;
  }
`;

export const PrevButton = styled(Button)`
  left: 0;
  img {
    transform: scale(-1);
  }
`;

export const NextButton = styled(Button)`
  right: 0;
`;
