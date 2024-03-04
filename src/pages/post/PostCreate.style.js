import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 68px;
  display: flex;
  padding: 13px 0;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 1280px) {
    padding: 13px 24px;
  }

  @media (max-width: 767px) {
    padding: 12px 20px;
    flex-direction: column;
    height: 104px;
  }
`;
export const UserName = styled.h1`
  color: var(--gray800);
  width: 380px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  margin-right: auto;
  @media (max-width: 767px) {
    min-width: 384px;
    height: 52px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
  }
`;
export const Navservice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
    padding: 8px 0;
    height: 52px;
    border-top: 1px solid #ededed;
  }
`;
export const Compose = styled.div`
  display: flex;
  position: relative;
  gap: 11px;
  p {
    color: var(--gray900);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
  }
  span {
    color: var(--gray900);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const Profileimg = styled.div`
  img,
  div {
    position: absolute;
    width: 28px;
    height: 28px;
    border: 2px solid var(--white);
    border-radius: 16px;
  }
  .profileimg-0 {
    left: -75px;
    z-index: 1;
  }
  .profileimg-1 {
    left: -60px;
    z-index: 2;
  }
  .profileimg-2 {
    left: -45px;
    z-index: 3;
  }
  div {
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #e3e3e3;
    left: -30px;
    z-index: 4;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const Line1 = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray200);
  margin: 0 28px;
  @media ${device.mobile} {
    display: none;
  }
`;
export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const BadgeBox = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.54);
  padding: 8px 12px;
  border-radius: 32px;
  gap: 4px;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }
  span {
    color: var(--white);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const EmojiCount = styled.div`
  width: 36px;
  height: 36px;
  padding: 6px;
  margin: 0 8px 0 2px;
  img {
    width: 24px;
    height: 24px;
  }
`;
export const Line2 = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray200);
  margin: 0 13px;
`;
