import { browserRouter, Route, Routes } from 'react';
import { Component } from 'react';
import React from 'react';

import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinsPage from './pages/CoinsPage';

class App extends Component {
  render() {
    return (
      <browserRouter>
        <Routes >
          <Header />
          <Route path='/' Component={HomePage} />
          <Route path='/coins/:id' Component={CoinsPage} />
        </Routes>

      </browserRouter >

    );
  }
}

export default App;
