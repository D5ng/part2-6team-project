import React, { useEffect, useState } from 'react';
import * as S from './MoreImgModal.style';
import { useMessageFormContext } from '../context/MessageFormContext';
import { getUnsplashProfileImg } from '../api';

function MoreImgModal() {
  const { toggleModal, setToggleModal, setCurrentProfileImg } = useMessageFormContext();
  const [imgData, setImgData] = useState([]);
  const getImgData = async () => {
    const data = await getUnsplashProfileImg();
    setImgData(data);
  };
  useEffect(() => {
    if (toggleModal) {
      getImgData();
    }
  }, [toggleModal]);
  return (
    <S.ModalLayout show={toggleModal}>
      <S.Modal>
        <S.CloseModalBtn onClick={() => setToggleModal(false)} type="button">
          X
        </S.CloseModalBtn>
        <S.ModalTitle>프로필 이미지를 선택해주세요</S.ModalTitle>
        <S.ImgList>
          {imgData &&
            imgData.map((v) => (
              <S.ImgItem>
                <S.Img src={v} alt="이미지" onClick={() => setCurrentProfileImg(v)} />
              </S.ImgItem>
            ))}
        </S.ImgList>
      </S.Modal>
    </S.ModalLayout>
  );
}

export default MoreImgModal;
