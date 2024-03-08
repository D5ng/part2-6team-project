import React from 'react';
import * as S from './UnsplashCategory.style';

const Categories = [
  { id: 1, title: 'Animal', image: '/images/unsplash/animal.png' },
  { id: 2, title: 'People', image: '/images/unsplash/people.png' },
  { id: 3, title: 'Nature', image: '/images/unsplash/nature.png' },
  { id: 4, title: 'Space', image: '/images/unsplash/space.png' },
];

function UnsplashCategoryItem({ category, onCategory }) {
  return (
    <S.Category onClick={onCategory.bind(this, category.title)}>
      <S.CategoryButton>
        <S.Image src={category.image} alt={category.title} />
        <S.Title>{category.title}</S.Title>
      </S.CategoryButton>
    </S.Category>
  );
}

function UnsplashCategory({ onCategory }) {
  return (
    <S.Categories>
      {Categories.map((category) => (
        <UnsplashCategoryItem key={category.id} category={category} onCategory={onCategory} />
      ))}
    </S.Categories>
  );
}

export default UnsplashCategory;
