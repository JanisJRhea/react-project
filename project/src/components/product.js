import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        
          
            <Link to="featuredproduct">Featured Product</Link>
          
            <Link to="newproduct">New Product</Link>
          
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;

