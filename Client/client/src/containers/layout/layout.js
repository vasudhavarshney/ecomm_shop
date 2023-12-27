import React from 'react'
import SearchBar from '../../components/Searchbar/Searchbar'
import Cart from '../../components/cart/cart.js'
import './layout.css'

//importing all handlers here 
import { handleSearch }  from './layoutHandlers.js'


export default function layout() {
  return (
    <div className='main_container'>
      <div className='layout_box'>
        <div className="header">
          <SearchBar onSearch={handleSearch}/>   
          <Cart />
        </div>
      </div>
    </div>
  )
}


