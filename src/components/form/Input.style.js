import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const Input = styled.div``;

export const InputElement = styled.input`
  border: 1px solid ${({ $error }) => ($error ? 'red' : 'var(--gray300)')};
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;

  &:hover {
    border-color: var(--gray500);
  }

  &:focus {
    border: 2px solid var(--gray500);
  }
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: var(--error);
  height: 0;
  margin-top: ${({ $error }) => $error && '5px'};
  display: ${({ $error }) => $error && 'block'};
`;
