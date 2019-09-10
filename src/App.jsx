import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <Home />
  </div>
);

export default App;
