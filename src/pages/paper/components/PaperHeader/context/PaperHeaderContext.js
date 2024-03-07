import React, { createContext, useEffect, useState, useMemo } from 'react';
import * as API from '@Paper/api';
import { useParams } from 'react-router-dom';

export const PaperHeaderContext = createContext();

export function PaperHeaderContextProvider({ children }) {
  const { recipientsId } = useParams();
  const [emojis, setEmojis] = useState([]);
  const [topReactions, setTopReactions] = useState([]);

  const fetchRequest = async () => {
    try {
      const response = await fetch(API.getRollingPaper(recipientsId));
      const data = await fetch(API.getreactions(recipientsId));
      const responseData = await response.json();
      const reactiondata = await data.json();

      setEmojis(reactiondata.results);
      setTopReactions(responseData.topReactions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetEmojis = (newEmojis) => {
    setEmojis(newEmojis);
  };

  const handleSetTopReactions = (newTopReactions) => {
    setTopReactions(newTopReactions);
  };

  const updateEmoji = (emojiIcon) => {
    const updateArray = (array) =>
      array.map((emoji) => (emoji.emoji === emojiIcon ? { ...emoji, count: emoji.count + 1 } : emoji));

    const newEmojis = updateArray(emojis);
    const newReactions = updateArray(topReactions);

    setEmojis(newEmojis);
    setTopReactions(newReactions);
  };

  useEffect(() => {
    fetchRequest();
  }, [recipientsId]);

  const contextValue = useMemo(
    () => ({
      emojis,
      handleSetEmojis,
      topReactions,
      handleSetTopReactions,
      fetchRequest,
      updateEmoji,
    }),
    [emojis, handleSetEmojis, topReactions, handleSetTopReactions, fetchRequest, updateEmoji],
  );

  return <PaperHeaderContext.Provider value={contextValue}>{children}</PaperHeaderContext.Provider>;
}
