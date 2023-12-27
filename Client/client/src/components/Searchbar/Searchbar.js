import React, { useState } from 'react';
import  './Searchbar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // You can perform additional actions here before triggering the search
    // For example, you might want to validate the query or apply some filters

    // Call the onSearch prop with the current query
    onSearch(query);
  };

  return (
    <div className='flex_container'>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button  className="searchbuttom" onClick={handleSearch}></button>
    </div>
  );
};

export default SearchBar;
