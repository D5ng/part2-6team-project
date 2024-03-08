import React, { useEffect, useState } from 'react';
import { PaperContextProvider } from '@Paper/context/PaperContext';
import { PaperHeaderContextProvider } from '@Components/PaperHeader/context/PaperHeaderContext';
import PaperHeader from '@Components/PaperHeader/PaperHeader';
import PaperContents from './components/PaperContents';

function Paper() {
  return (
    <PaperContextProvider>
      <PaperHeaderContextProvider>
        <PaperHeader />
        <PaperContents />
      </PaperHeaderContextProvider>
    </PaperContextProvider>
  );
}

export default Paper;
