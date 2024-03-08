import styled from 'styled-components';

export const Categories = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 7px));
  gap: 10px;
  margin: 20px 0;
`;

export const Category = styled.li`
  border: 1px solid var(--gray300);
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    border: 1px solid var(--black);
  }

  &:focus {
    border: 1px solid var(--black);
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  width: 100%;
`;

export const Image = styled.img`
  width: 36px;
`;

export const Title = styled.h6`
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
`;
