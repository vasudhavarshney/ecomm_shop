import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './MainLayout.js';
import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <MainLayout/>
      </Router>
    </div>
  );
}

export default App;
