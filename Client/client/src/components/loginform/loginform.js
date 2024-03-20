import React, { useState } from 'react';
import Overlay from '../Overlay/Overlay.js';


const LoginFormCard = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div >
        
      <div onClick={toggleLoginForm}>
        {isLoginFormVisible ? 'Login' : 'Login'}
      </div>

      {isLoginFormVisible && <Overlay children={
        (
        
            <div
            style={{
            alignItems: 'center',
            display: 'flex',
            flexFlow: 'column',
            flexDirection: 'column',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              width: '50vw',
              maxWidth: '400px',
              backgroundColor: '#f8f8f8',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            
            <div style={{  cursor: 'pointer', fontSize: '10px', position:"absolute",top:"0px", right:'0px', backgroundColor:"#175899" , borderRadius:'51%',alignItems:'center', color:"white", border:"1px solid black"}} onClick={toggleLoginForm}>
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <h2 style={{ color: '#333' }}>Login</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '10px', color: '#555' }}>
                Username:
                <input type="text" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <label style={{ marginBottom: '10px', color: '#555' }}>
                Password:
                <input type="password" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </label>
              <button type="submit" style={{ backgroundColor: '#175899', color: 'white', padding: '12px', cursor: 'pointer', borderRadius: '5px' }}>
                Login
              </button>
            </form>
    
          </div>
      )}/>}
    </div>
  );
};

export default LoginFormCard;