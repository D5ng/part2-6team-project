/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as Page from 'pages';
import MetaTag from '@Pages/SEOMetaTag';
import NotFound from '@Pages/NotFoundpage/NotFound';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Page.Root />}>
            <Route index element={<Page.Home />} />
            <Route path="post" element={<Page.FormCreatePage />} />
            <Route path="list" element={<Page.RollingList />} />
            <Route path="posts" element={<Page.Posts />} />
            <Route path="post/:id/message" element={<Page.MessageCreate />} />
            <Route path="post/:recipientsId" element={<Page.Paper />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
