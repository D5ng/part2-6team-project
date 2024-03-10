import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
`;

export const BadgeItem = styled.span`
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 41px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
`;
