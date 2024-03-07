import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const TopEmojis = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 28px;
  gap: 8px;
  @media ${device.mobile} {
    justify-content: space-between;
    gap: 16px;
  }
`;
export const BadgeBox = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.54);
  padding: 8px 12px;
  border-radius: 32px;
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
