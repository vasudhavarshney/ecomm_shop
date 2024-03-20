// Sidebar.jsx
import React, { useState } from 'react';
import './sidebar.css'




const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <h2>Sidebar</h2>
      {/* Add your sidebar content here */}
    </div>
  );
};

export default Sidebar;
