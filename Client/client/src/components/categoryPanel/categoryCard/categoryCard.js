// CategoryCard.js
import React from 'react';
import './categoryCard.css';

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <div className="category-card" >
      <img src={imageUrl} alt={title} title={title}/>
      {/* <h3>{title}</h3> */}
    </div>
  );
};

export default CategoryCard;
