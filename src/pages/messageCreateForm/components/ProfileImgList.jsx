import React from 'react';
import * as S from 'pages/messageCreateForm/components/ProfileImgList.style';

function ProfileImgList({ unsplashImageState, openModal, dispatch }) {
  // const [profileImgSrc, setProfileImgSrc] = useState([]);

  const handleProfileImgClick = (url) => {
    dispatch({ type: 'profileImageURL', profileImageURL: url });
  };

  // useEffect(() => {
  //   const getProfileImgData = async () => {
  //     const response = await requsetProfileImgData();
  //     setProfileImgSrc([...response.imageUrls]);
  //   };
  //   getProfileImgData();
  // }, []);

  // useEffect(() => {
  //   dispatch({ type: 'profileImageURL', profileImageURL: profileImgSrc[0] });
  // }, [profileImgSrc]);

  return (
    <S.ProfileImgList>
      {unsplashImageState.data &&
        unsplashImageState.data?.map((image) => (
          <S.ListItem key={image.id}>
            <S.ProfileImg
              src={image.urls.thumb}
              alt="프로필 이미지"
              onClick={handleProfileImgClick.bind(this, image.urls.thumb)}
            />
          </S.ListItem>
        ))}
      <S.ListItem>
        <S.SearchBtb onClick={openModal} type="button">
          <S.SearchImg src="/images/icons/searchIcon.svg" alt="프로필 이미지 검색" />
        </S.SearchBtb>
      </S.ListItem>
    </S.ProfileImgList>
  );
}

export default ProfileImgList;
