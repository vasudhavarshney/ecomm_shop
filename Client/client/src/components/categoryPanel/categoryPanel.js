// CategoryPanel.js
import React  from 'react';
import Carousel from 'react-elastic-carousel';
import CategoryCard from './categoryCard/categoryCard';
import './categoryPanel.css'; // Import the CSS file

const CategoryPanel = ({ categories }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 6 },
    { width: 768, itemsToShow: 9 },
    { width: 1200, itemsToShow: 12 },
  ];

  return (
    <div className="category-panel">
    
      <Carousel
        breakPoints={breakPoints}
        containerClass="carousel-container"
      >
        {categories.map((category, index) => { return(
          <div >
            <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
          />
          </div>
          
        )})}
      </Carousel>

    </div>
  );
};

export default CategoryPanel;
