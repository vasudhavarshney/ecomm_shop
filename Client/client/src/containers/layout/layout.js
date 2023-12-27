import React from 'react'
import SearchBar from '../../components/Searchbar/Searchbar'
import Cart from '../../components/cart/cart.js'
import './layout.css';
import CategoryPanel from '../../components/categoryPanel/categoryPanel.js';

//importing all handlers here 
import { handleSearch }  from './layoutHandlers.js'


export default function layout() {
  const categories = [
    { title: 'Category 1', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 2', imageUrl: 'https://shorturl.at/vDLXY' },
    { title: 'Category 3', imageUrl: 'https://shorturl.at/ehjku' },
    { title: 'Category 4', imageUrl: 'https://shorturl.at/hrFIX' },
    { title: 'Category 5', imageUrl: 'https://shorturl.at/dvABM' },
    { title: 'Category 6', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 2', imageUrl: 'https://shorturl.at/vDLXY' },
    { title: 'Category 3', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 4', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 5', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 6', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 1', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 2', imageUrl: 'https://shorturl.at/vDLXY' },
    { title: 'Category 3', imageUrl: 'https://shorturl.at/ehjku' },
    { title: 'Category 4', imageUrl: 'https://shorturl.at/hrFIX' },
    { title: 'Category 5', imageUrl: 'https://shorturl.at/dvABM' },
    { title: 'Category 6', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 2', imageUrl: 'https://shorturl.at/vDLXY' },
    { title: 'Category 3', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 4', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 5', imageUrl: 'https://shorturl.at/ehW69' },
    { title: 'Category 6', imageUrl: 'https://shorturl.at/ehW69' },
    // Add more categories as needed
  ];
  return (
    <div className='main_container'>
      <div className='layout_box'>
        <div className="header">
          <SearchBar onSearch={handleSearch}/>   
          <Cart />
        </div><br/>
        <div>
          <CategoryPanel categories={categories} />
        </div>
        
      </div>
    </div>
  )
}


