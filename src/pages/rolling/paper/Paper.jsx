/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import * as S from '@Paper/Paper.style';
import Card from '@Components/Card/Card';

function Paper() {
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [data, setData] = useState(null);
  const [results, setResults] = useState(null);

  const api = `${process.env.REACT_APP_API_KEY}/4-6/recipients/2872/messages/`;
  const api2 = `${process.env.REACT_APP_API_KEY}/4-6/recipients/2872/`;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error('알 수 없는 에러가 발생했습니다.');
      }
      const responseData = await response.json();
      setIsLoading(false);
      setData(responseData);

      const rseponse2 = await fetch(api2);
      const response2Data = await rseponse2.json();

      setResults(response2Data);
    } catch (error) {
      setHasError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return '로딩중...';
  }

  if (hasError) {
    return '에러 발생';
  }

  console.log(data);

  return (
    <S.Section $bgColor={results && results.backgroundColor}>
      <S.PaperWrapper>
        <S.PostButton>+</S.PostButton>
        {data?.results?.map((info) => (
          <Card
            key={info.id}
            name={info.sender}
            profileImg={info.profileImageURL}
            label={info.relationship}
            text={info.content}
            date={info.createdAt}
          />
        ))}
      </S.PaperWrapper>
    </S.Section>
  );
}

export default Paper;
