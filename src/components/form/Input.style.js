import styled from 'styled-components';

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
`;

export const Error = styled.p`
  font-size: 12px;
  color: var(--error);
  height: 0;
  padding: ${({ $error }) => ($error ? '5px 0' : '0')};
`;
