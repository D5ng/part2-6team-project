import React from 'react';
import * as S from '@Components/paperCard/PaperCard.style';

function ImageGallery({ imageArray, imageCount }) {
  const imageArrayLength = imageCount > 3 ? imageCount - 3 : null;

  return (
    <S.ImgWrapper>
      {imageArray.map((image, index) => (
        <S.TestImg key={index} src={image} alt={`Image ${index}`} />
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
