import React from 'react';
import * as S from '@CardList/CardList.style';

function ImageGallery({ imageArray }) {
  const imageArrayLength = imageArray.length > 3 ? imageArray.length - 3 : null;
  const slicedImageArray = imageArray.length > 3 ? imageArray.slice(0, 3) : imageArray;

  return (
    <S.ImgWrapper>
      {slicedImageArray.map((image, index) => (
        <S.TestImg key={image} src={image} alt={`Image ${index}`} />
      ))}
      {imageArrayLength && (
        <S.LastTestImg>
          <span>+</span>
          {imageArrayLength}
        </S.LastTestImg>
      )}
    </S.ImgWrapper>
  );
}

export default ImageGallery;
