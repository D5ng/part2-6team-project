import React from 'react';
import { PaperContextProvider } from '@Paper/context/PaperContext';
import PaperContents from './components/PaperContents';

function Paper() {
  return (
    <PaperContextProvider>
      <PaperContents />
    </PaperContextProvider>
  );
}

export default Paper;
