// Header.js
import {React }from 'react';
import './header.css'
import Loginform from '../loginform/loginform.js'
// import Overlay from '../Overlay/Overlay.js';

// import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router

const Header = ({ leftItems, rightItems}) => {
  return (
    <header className="header">
      <div className="left-items">
        {leftItems && leftItems.map((item, index) => (
          <div key={index} >
            <img src={item.link} alt={item.text}  style={{width: '5vh', marginLeft:"5vw"}}/>
          </div>
        ))}
        
      </div>
      <div className="right-items">
        {rightItems && rightItems.map((item, index) => (
          <div key={index} className="header-item"><a href={item.link}>{item.text}</a>
          </div>
        ))}
        <div className="header-item"><Loginform /></div>
      </div>
    </header>
  );
};

export default Header;
