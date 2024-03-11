import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const BadgeBox = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.54);
  padding: 8px 12px;
  border-radius: 32px;
  gap: 4px;

  @media ${device.mobile} {
    height: 28px;
  }
`;
export const BadgeEmoji = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

export const BadgeCount = styled.span`
  color: var(--white);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const NoEmogiText = styled.p`
  width: 155px;
  grid-column: 1 / 5;
  text-align: center;
`;
