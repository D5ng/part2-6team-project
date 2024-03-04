import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;
export const BadgeBox = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.54);
  padding: 8px 12px;
  border-radius: 32px;
  gap: 4px;
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

export const NoEmogiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
`;
