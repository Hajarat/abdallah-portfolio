import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';

import Logo from './components/Logo';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
    <Layout
      style={{
        minHeight: '100vh',
        width: '100%',
      }}
      dir={'ltr'}
    >
      <Header />
      <Routes>
        <Route path="*" element={<AboutMe />} />
        <Route path="/work/*" element={<Work />} />
        {/* <Route path="/contact/*" element={<Contact />} /> */}
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
