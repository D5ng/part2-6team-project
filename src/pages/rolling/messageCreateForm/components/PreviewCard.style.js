import styled, { css } from 'styled-components';
import { device } from 'styles/breakpoints';

export const Card = styled.div`
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background: var(--white);
  padding: 28px 24px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
  position: relative;
  @media ${device.tablet} {
    width: 352px;
    height: 284px;
  }
  @media ${device.mobile} {
    width: 320px;
    height: 230px;
  }
`;

export const SenderBox = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid var(--gray200);
  display: flex;
  gap: 14px;
`;

export const MessageBox = styled.div`
  font-size: 18px;
  color: var(--gray600);
  padding-top: 16px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 100px;
`;

export const Wrap = styled.div``;

export const Sender = styled.p`
  margin-bottom: 6px;
  color: #000;
  font-size: 20px;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const Badge = styled.span`
  padding: 0px 8px;
  border-radius: 8px;
  font-size: 16px;
  background: ${({ style }) => style.bgColor};
  color: ${({ style }) => style.textColor};
  line-height: 20px;
  display: inline-block;
`;

export const CreateDate = styled.span`
  position: absolute;
  bottom: 28px;
  left: 24px;
  font-size: 14px;
  color: var(--gray400);
`;
