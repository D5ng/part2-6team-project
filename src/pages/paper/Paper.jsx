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
  const [topReactions, setTopReactions] = useState([]);
  // const { state: emojiState, fetchRequest: emojiFetchRequest } = useHttp();

  const fetchRequest = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/${TEAM}/recipients/${recipientsId}/reactions/`);
      const data = await fetch(`${BASE_API_URL}/${TEAM}/recipients/${recipientsId}/`);
      const responseData = await response.json();
      const reactiondata = await data.json();
      setEmojis(responseData.results);
      setTopReactions(reactiondata.topReactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const updateEmoji = (emojiIcon) => {
    const newEmojis = emojis.map((emoji) => (emoji.emoji === emojiIcon ? { ...emoji, count: emoji.count + 1 } : emoji));
    const newReactions = topReactions.map((emoji) =>
      emoji.emoji === emojiIcon ? { ...emoji, count: emoji.count + 1 } : emoji,
    );
    setEmojis(newEmojis);
    setTopReactions(newReactions);
  };

  return (
    <PaperContextProvider>
      <PostCreate onUpdateEmoji={updateEmoji} emojis={emojis} topReactions={topReactions} />
      <PaperContents />
    </PaperContextProvider>
  );
}

export default Paper;
