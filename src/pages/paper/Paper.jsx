import React, { useEffect, useState } from 'react';
import { PaperContextProvider } from '@Paper/context/PaperContext';
import { PaperHeaderContextProvider } from '@Pages/paper/components/paperHeader/context/PaperHeaderContext';
import PaperHeader from '@Pages/paper/components/paperHeader/PaperHeader';
import PaperContents from './components/paperContents/PaperContents';

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
