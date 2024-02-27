import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'styles/Global.style';

function Root() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
