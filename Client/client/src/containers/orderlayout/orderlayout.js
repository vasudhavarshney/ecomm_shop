import { React } from 'react'
import './orderlayout.css';
import Header from '../../components/header/header.js'

export default function orderlayout() {
    const leftItems = [
        { text: 'Logo', link: 'https://static.thenounproject.com/png/9663-200.png' },
        
      ];
      
      const rightItems = [
        { text: 'Home', link: '/home' },
        { text: 'Orders', link: '/orders' },
        { text: 'Profile', link: '/Profile' },
      ];
  return (
    <div className='main_container'>
      <div className='layout_box'>
        <Header leftItems={leftItems} rightItems={rightItems} />
    

      </div>
    </div>
  )
}     
//////////hi this is test commit
