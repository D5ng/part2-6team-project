import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const PaperHeader = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 68px;
  display: flex;
  padding: 13px 0;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    padding: 13px 24px;
  }

  @media (max-width: 767px) {
    padding: 12px 0px;
    flex-direction: column;
    height: 104px;
  }
`;
export const RecipientName = styled.h1`
  color: var(--gray800);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  @media ${device.mobile} {
    width: 100%;
    min-width: 384px;
    height: 52px;
    padding: 12px 35px;
    display: flex;
    align-items: center;
  }
`;
export const PaperUtility = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: auto;
  @media ${device.mobile} {
    width: 100%;
    padding: 8px 30px 8px 35px;
    height: 52px;
    border-top: 1px solid #ededed;
  }
`;