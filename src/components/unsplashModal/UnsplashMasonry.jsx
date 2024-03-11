/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Loading from '@Components/ui/Loading';
import * as S from './UnsplashMasonry.style';
import { useUnsplashModalContext } from './UnsplashModalContext';

function UnsplashMasonry(props, ref) {
  const { onSearchIncreasePage, onIncreasePage, isLoading, isSearch, imageList, hasError } = props;
  const { selectedItem, handleBackgroundClick } = useUnsplashModalContext();

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    if (isLoading) return;
    if (isSearch) {
      onSearchIncreasePage();
    } else {
      onIncreasePage();
    }
  };

  const observerRef = useIntersectionObserver(onIntersect, { threshold: 0.3 });

  return (
    <S.ImageList ref={ref}>
      {hasError && <div>Error</div>}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter="10px">
          {isLoading && <Loading size={50} color="black" />}
          {imageList?.map((image) => (
            <S.ImageItem
              key={image.id}
              $isSelected={selectedItem === image.urls.regular}
              onClick={handleBackgroundClick.bind(this, image.urls.regular)}
            >
              <S.Image src={image.urls.small} $aspectRatio={`${image.width} / ${image.height}`} alt="unsplash image" />
            </S.ImageItem>
          ))}
          <S.Observer ref={observerRef} />
          <S.Observer ref={observerRef} />
        </Masonry>
      </ResponsiveMasonry>
    </S.ImageList>
  );
}

export default forwardRef(UnsplashMasonry);
