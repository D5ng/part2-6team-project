import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'styles/Global.style';
import Test from '@Test/Test';

function Root() {
  return (
    <>
      <Test />
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
