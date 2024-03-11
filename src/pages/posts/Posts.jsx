/* eslint-disable no-nested-ternary */
import Input from '@Components/form/Input';
import PaperCard from '@Components/paperCard/PaperCard';
import { getAllPapers } from '@Pages/list/api/api';
import SkeletonPosts from '@Pages/posts/SkeletonPosts';
import * as S from '@Pages/posts/Posts.style';
import React, { useEffect, useState } from 'react';

function Posts() {
  const [isLoading, setIsLoading] = useState(false);
  const [allPapers, setAllPapers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPapers, setFilteredPapers] = useState([]);

  const handleLoadAllPapers = async () => {
    try {
      setIsLoading(true);
      const result = await getAllPapers();
      if (!result) return;
      const data = result.results;
      setAllPapers(data);
      setFilteredPapers(data); // 초기에 모든 페이퍼를 보여줍니다.
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    handleLoadAllPapers();
  }, []);

  const handleSearch = () => {
    const filtered = allPapers.filter((paper) => paper.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPapers(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <S.PostsContainer>
      <div>
        <S.Title>페이퍼</S.Title>
        <S.TitleColor> 검색</S.TitleColor>

        <S.InputWrapper>
          <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress}>
            페이퍼를 검색해보세요
          </Input>
          <S.SearchButton onClick={handleSearch} type="button">
            검색
          </S.SearchButton>
        </S.InputWrapper>

        <S.CardListWrapper>
          {isLoading ? (
            filteredPapers.map((list) => <SkeletonPosts list={list} key={list.id} />)
          ) : filteredPapers.length !== 0 ? (
            filteredPapers.map((list) => <PaperCard list={list} key={list.id} />)
          ) : (
            <S.NoResults>검색 결과가 없어요!</S.NoResults>
          )}
        </S.CardListWrapper>
      </div>
    </S.PostsContainer>
  );
}

export default Posts;
