import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Page from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Root />}>
          <Route index element={<Page.Home />} />
          <Route path="post" element={<Page.PostCreate />} />
          <Route path="list" element={<Page.RollingList />} />
          <Route path="post/:recipientsId" element={<Page.Paper />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
