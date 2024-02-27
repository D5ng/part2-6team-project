import styled, { css } from 'styled-components';

const baseBorder = css`
  border: 1px solid var(--gray300);
`;

export const Dropdown = styled.div`
  width: 320px;
  cursor: pointer;
`;

export const DropdownElement = styled.div`
  ${baseBorder}
  border: ${({ $isdrop }) => $isdrop && '2px solid var(--gray500)'};
  width: 320px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
`;

export const Options = styled.ul`
  padding: 6px 0;
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

export const Option = styled.li`
  height: 50px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  display: felx;
  &:hover {
    background-color: var(--gray100);
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: var(--error);
  margin-top: 5px;
`;
