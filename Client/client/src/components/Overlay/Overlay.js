// Overlay.js

import React from 'react';

const Overlay = ({ children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999, // Set a high z-index to ensure it's on top
      }}
    >
      {children}
    </div>
  );
};

export default Overlay;
