import styled from 'styled-components';

export const Input = styled.div`
  margin: 30px;
  width: 320px;
`;

export const InputElement = styled.input`
  border: 1px solid ${(props) => (props.error ? 'red' : 'var(--gray300)')};
  width: 320px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  padding: 0 16px;
  font-size: 16px;
  &:hover {
    border-color: var(--gray500);
  }

  &:focus {
    border: 2px solid var(--gray500);
  }
  &:disabled {
    background-color: #f2f2f2;
    color: #999;
    border-color: #ccc;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: var(--error);
  margin-top: 5px;
`;
