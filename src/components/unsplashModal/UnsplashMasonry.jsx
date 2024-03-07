/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useEffect, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import * as S from './UnsplashMasonry.style';
import { useUnsplashModalContext } from './UnsplashModalContext';

function UnsplashMasonry(props, ref) {
  const { handleSearchIncreasePage, handleIncreasePage, isLoading, isSearchMode, data } = props;
  const { selectedItem, handleBackgroundClick } = useUnsplashModalContext();

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    if (isLoading) return;

    if (isSearchMode) {
      handleSearchIncreasePage();
    } else {
      handleIncreasePage();
    }
  };

  const observerRef = useIntersectionObserver(onIntersect, { threshold: 0.3 });

  return (
    <S.ImageList ref={ref}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter="20px">
          {data?.map((image) => (
            <S.ImageItem key={image.id} $isSelected={selectedItem === image.urls.regular}>
              <S.Image
                src={image.urls.small}
                $aspectRatio={`${image.width} / ${image.height}`}
                onClick={handleBackgroundClick.bind(this, image.urls.regular)}
                alt="unsplash image"
              />
            </S.ImageItem>
          ))}

          <S.Observer ref={observerRef} />
        </Masonry>
      </ResponsiveMasonry>
    </S.ImageList>
  );
}

export default forwardRef(UnsplashMasonry);
