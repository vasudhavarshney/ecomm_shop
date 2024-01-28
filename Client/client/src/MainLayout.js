import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from './containers/layout/layout.js'
import Orderlayout from './containers/orderlayout/orderlayout.js'


const MainLayout = () => {
    return (
    <Routes>
      <Route path="/home" element=<Layout />/>
      <Route path="/orders" element=<Orderlayout />/>
    </Routes>
      
    
    );
  };
  
  export default MainLayout;