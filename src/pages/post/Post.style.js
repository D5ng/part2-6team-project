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
  width: 227px;
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
  .profileimg1 {
    left: -75px;
    z-index: 1;
  }
  .profileimg2 {
    left: -60px;
    z-index: 2;
  }
  .profileimg3 {
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
export const EmojiAddButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-items: center;
  align-items: center;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  font-size: 16px;
  color: var(--gray900);
  font-weight: 500;
  line-height: 24px;
  gap: 4px;
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
export const Shard = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-items: center;
  align-items: center;
  border: 1px solid var(--gray300);
  border-radius: 6px;
  img {
    width: 24px;
    height: 24px;
  }
`;
export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--orange200);
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 100px;
    background: var(--gray500);
  }
  img {
    width: 24px;
    height: 24px;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    width: 384px;
    height: 280px;
    border-radius: 16px;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  }
`;
export const Wrapper = styled.div`
  display: grid;
  margin-top: 113px;
  margin-bottom: 246px;
  gap: 24px;
  grid-row-gap: 28px;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    margin-top: 93px;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    margin-top: 80px;
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
