// CategoryPanel.js
import React  from 'react';
import Carousel from 'react-elastic-carousel';
import CategoryCard from './categoryCard/categoryCard';
import './categoryPanel.css'; // Import the CSS file

const CategoryPanel = ({ categories }) => {
  const breakPoints = [
    { width: 150, itemsToShow: 1 },
    { width: 250, itemsToShow: 2 },
    { width: 350, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];

  return (
    <div className="category-panel">
    
      <Carousel
        breakPoints={breakPoints}
        containerClass="carousel-container"
      >
        {categories.map((category, index) => { return(
          <div key={index}>
            <CategoryCard
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
