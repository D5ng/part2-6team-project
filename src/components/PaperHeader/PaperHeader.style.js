import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const PaperHeader = styled.nav`
  position: relative;
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
  @media ${device.mobile} {
    min-width: 360px;
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
    font-size: 25px;
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
  align-items: center;
  margin-left: auto;

  @media ${device.mobile} {
    justify-content: flex-end;
    width: 100%;
    padding: 12px 20px;
    height: 52px;
    border-top: 1px solid var(--gray200);
  }
`;

export const TopReactionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
