import styled from 'styled-components';

const CardList = styled.li`
  border-radius: 16px;
  transition: 0.3s;
  box-shadow: 2px 2px 25px 2px rgba(204, 204, 204, 0.96);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

export default CardList;
