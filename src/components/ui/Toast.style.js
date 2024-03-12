import styled, { keyframes } from 'styled-components';

const bounceIn = keyframes`
  0% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }

  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

const slidedOut = keyframes`
  from {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  to {
    transform: translate(-50%, 300%);
    opacity: 0;
  }
`;

export const Toast = styled.div`
  z-index: 9999;
  display: flex;
  position: fixed;
  bottom: 120px;
  left: 50%;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  animation:
    ${bounceIn} 0.7s cubic-bezier(0.67, 0.07, 0.34, 0.98) forwards,
    ${slidedOut} 0.7s cubic-bezier(0.67, 0.07, 0.34, 0.98) forwards 3s;
  animation-duration: 0.4s;
`;
export const Toastcontainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const ToastIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;
export const ToastText = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
