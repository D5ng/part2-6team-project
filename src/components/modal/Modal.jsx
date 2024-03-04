import React, { useEffect } from 'react';
import * as S from '@Components/modal/Modal.style';
import { BadgeRelationship } from '@Components/ui/BadgeRelationship';
import formatDate from 'utils/format';
import useKeyEvent from 'hooks/useKeyEvent';

function Modal({ onCloseModal, modalData }) {
  const { sender, content, createdAt, profileImageURL, relationship, fonts } = modalData;
  useKeyEvent((key) => (key === 'Escape' || key === 'Enter') && onCloseModal());

  // content: '안녕하세요. 동현님 항상 열심히하는 모습 보기 좋습니다.';
  // createdAt: '2024-02-28T16:50:49.396725Z';
  // font: 'Pretendard';
  // id: 5173;
  // profileImageURL: 'https://i.namu.wiki/i/E5ilzY4X5szwOyXYvlVaMOoeaASvFtmVMuiaRjspJZXfLD-yOdVs-De2eh6ULZhMNBjxqwdlXRxzAgGuPC8ZgtGgyCo_FhLom5jMkEDuJtb2PHIg2OXWK47zNpt2Ge2OhdOD12ZvRdLBSVAE3_3eVd1hmSrTQPlpEFiH8xBoGt0.webp';
  // recipients: 2872;
  // relationship: '지인';
  // sender: '설인아';
  return (
    <S.Container>
      <S.Info>
        <S.Profile>
          <S.ProfileImg src={profileImageURL} />
          <S.ProfileTitleContainer>
            <S.ProfileTitle>
              <S.ProfileText>From.</S.ProfileText>
              <S.ProfileName>{sender}</S.ProfileName>
            </S.ProfileTitle>
            <BadgeRelationship relationship={relationship} />
          </S.ProfileTitleContainer>
        </S.Profile>
        <S.CreatAt>{formatDate(createdAt)}</S.CreatAt>
      </S.Info>
      <S.Contents>
        <S.TextBox $font={fonts}>{content}</S.TextBox>
        <S.Button onClick={onCloseModal}>확인</S.Button>
      </S.Contents>
    </S.Container>
  );
}
export default Modal;
