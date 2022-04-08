import './App.css';

import React from 'react';
import { Container } from 'bootstrap-4-react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navigator from './components/Navigator';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile';
import Editor from './components/Editor';

const App = () => {
  return (
    <Container as="main" role="main">
      <Navigator />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/entry' element={<Editor />} />
        </Routes>
      </HashRouter>
    </Container>
  )
}

export default App;