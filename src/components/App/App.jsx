import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';

import './App.scss';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container"></div>
        </main>
        <Footer />
      </div>
      <Background />
    </>
  );
}

export default App;
