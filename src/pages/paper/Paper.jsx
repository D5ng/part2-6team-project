import React, { useEffect, useState } from 'react';
import { PaperContextProvider } from '@Paper/context/PaperContext';
import PostCreate from 'pages/post/PostCreate';
import useHttp from 'hooks/useHttp';
import { BASE_API_URL, TEAM } from 'pages/post/api/api';
import { useParams } from 'react-router-dom';
import PaperContents from './components/PaperContents';

function Paper() {
  const { recipientsId } = useParams();
  const [emojis, setEmojis] = useState([]);
  // const { state: emojiState, fetchRequest: emojiFetchRequest } = useHttp();

  const fetchRequest = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/${TEAM}/recipients/${recipientsId}/reactions/`);
      const responseData = await response.json();
      setEmojis(responseData.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  //   setEmoji(emojiState?.data?.results);

  const updateEmoji = (emojiIcon) => {
    const newEmojis = emojis.map((emoji) => (emoji.emoji === emojiIcon ? { ...emoji, count: emoji.count + 1 } : emoji));
    setEmojis(newEmojis);
  };

  console.log(emojis);

  return (
    <PaperContextProvider>
      <PostCreate onUpdateEmoji={updateEmoji} emojis={emojis} />
      <PaperContents />
    </PaperContextProvider>
  );
}

export default Paper;
