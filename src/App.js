<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> 38c9f62 (Initialize project using Create React App)
  );
}

export default App;
