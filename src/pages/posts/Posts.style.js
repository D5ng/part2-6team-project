import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 300px 0;
`;

export const Title = styled.span`
  font-size: 45px;
  font-weight: 600;
  @media ${device.mobile} {
    font-size: 35px;
  }
`;

export const TitleColor = styled(Title)`
  color: var(--primary500);
`;

export const InputWrapper = styled.div`
  width: 845px;
  position: relative;
  margin: 40px 0 50px;
  @media ${device.tablet} {
    width: 560px;
  }
  @media ${device.mobile} {
    width: 274px;
    margin: 30px 0 30px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  background-color: var(--gray600);
  height: 100%;
  width: 80px;
  right: 0;
  top: 0;
  color: white;
  font-size: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CardListWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoResults = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  color: var(--gray300);
  margin-top: 100px;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;
