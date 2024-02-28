import styled from 'styled-components';

export const BackgroundOptions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 45px 0 50px;
`;

export const OptionList = styled.li`
  background-color: ${({ color }) => color};
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CheckIcon = styled.img`
  width: 44px;
  height: 44px;
`;
