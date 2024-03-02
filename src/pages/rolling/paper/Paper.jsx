import React from 'react';
import { PaperContextProvider } from '@Paper/context/PaperContext';
import { PostCreate } from 'pages';
import PaperContents from './components/PaperContents';

function Paper() {
  return (
    <PaperContextProvider>
      {/* <PostCreate /> */}
      <PaperContents />
    </PaperContextProvider>
  );
}

export default Paper;
