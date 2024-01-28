import { React } from 'react'
import SearchBar from '../../components/Searchbar/Searchbar'
import Cart from '../../components/cart/cart.js'
import './layout.css';
import CategoryPanel from '../../components/categoryPanel/categoryPanel.js';
import Header from '../../components/header/header.js'

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
  const leftItems = [
    { text: 'Logo', link: 'https://static.thenounproject.com/png/9663-200.png' },
    
  ];
  
  const rightItems = [
    { text: 'Home', link: '/home' },
    { text: 'Orders', link: '/orders' },
    { text: 'Settings', link: '/settings' },
  ];
  return (
    <div className='main_container'>
      <div className='layout_box'>
        <Header leftItems={leftItems} rightItems={rightItems} />
        <div className="Secondary-header">
          <SearchBar onSearch={handleSearch}/>   
          <Cart />
        </div>
        <CategoryPanel categories={categories} />
        
        
      </div>
    </div>
  )
}     
//////////hi this is test commit

