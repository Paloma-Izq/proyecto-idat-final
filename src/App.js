import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Products />
  </React.Fragment>
  );
}

export default App;
