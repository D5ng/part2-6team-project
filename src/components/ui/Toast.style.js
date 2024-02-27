import styled from 'styled-components';

export const Toast = styled.div`
  display: flex;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
`;
export const Toastcontainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const ToastIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
export const ToastText = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
