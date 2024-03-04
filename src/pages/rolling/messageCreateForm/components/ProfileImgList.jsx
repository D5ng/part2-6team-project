import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/components/ProfileImgList.style';
import { useMessageFormContext } from '../context/MessageFormContext';
import MoreProfileImgBtn from './MoreProfileImgBtn';

function ProfileImgList() {
  const { profileImgSrc, setCurrentProfileImg } = useMessageFormContext();
  const profileImgList = profileImgSrc.slice(1);
  const handleProfileImgClick = (url) => {
    setCurrentProfileImg(url);
  };
  return (
    <S.ProfileImgList>
      {profileImgList.map((url) => (
        <S.ListItem key={url}>
          <S.ProfileImg
            src={url}
            alt="프로필 이미지"
            onClick={() => {
              handleProfileImgClick(url);
            }}
          />
        </S.ListItem>
      ))}
      <S.ListItem>
        <MoreProfileImgBtn />
      </S.ListItem>
    </S.ProfileImgList>
  );
}

export default ProfileImgList;
