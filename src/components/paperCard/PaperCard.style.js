import styled from 'styled-components';

const TestImgStyle = `
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  border: 1.5px solid white;
  margin-right: -10px;
`;

export const PaperCard = styled.div`
  position: relative;
  display: flex;
  width: 275px;
  background-color: ${(props) => (props.$backgroundImageURL ? 'transparent' : props.$backgroundColor || '#ecd9ff')};
  height: 260px;
  border: 1px solid #0000001a;
  border-radius: 16px;
  padding: 20px 30px;
  box-sizing: border-box;
  overflow: hidden;
  color: ${(props) => (props.$backgroundImageURL ? 'white' : 'black')};
  cursor: pointer;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => props.$backgroundImageURL && `url(${props.$backgroundImageURL})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(2px) brightness(0.9);
    z-index: -1;
  }

  &::after {
    content: '';
    background-image: ${(props) => !props.$backgroundImageURL && `url(${props.$pattern})`};
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 142px;
    height: 142px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardContent = styled.div`
  padding-top: 10px;
  display: flex;
  height: 75%;
  width: 100%;
`;

export const CardContentWrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 12px;
  h2 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -1%;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -1%;
    margin-top: 10px;
  }

  span {
    font-weight: bold;
  }
`;

export const BadgeEmogiWrapper = styled.div`
  display: flex;
  gap: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 17px;
`;

export const TestImg = styled.img`
  ${TestImgStyle}
`;

export const LastTestImg = styled.div`
  ${TestImgStyle}
  background-color: white;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${(props) => (props.$backgroundImageURL ? 'black' : 'black')};
  border: 1px solid var(--gray200);
`;

export const AddCardButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0000008a;
  height: 36px;
  border-radius: 32px;
  padding: 8px 10px;
  gap: 3px;
  margin-right: 10px;
  color: white;
  font-size: 16px;
  span:first-child {
    padding-bottom: 3px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
`;
