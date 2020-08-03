import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, tittle }) => (
  <div className="categories">
    <h2 className="categories__tittle">{tittle}</h2>
    {children}
  </div>
);

export default Categories;
