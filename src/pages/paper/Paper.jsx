import React, { useContext } from 'react';
import { PaperContext, PaperContextProvider } from '@Paper/context/PaperContext';
import { PaperHeaderContextProvider } from '@Components/PaperHeader/context/PaperHeaderContext';
import PaperHeader from '@Components/PaperHeader/PaperHeader';
import MetaTag from '@Pages/SEOMetaTag';
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
