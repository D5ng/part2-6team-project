import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import Header from '@Components/header/Header';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
