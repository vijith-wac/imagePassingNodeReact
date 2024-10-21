// src/pages/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories'); 
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    
    <div className="container mt-5">
       {/* Category Filter Dropdown */}
       <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">Filter by Category</label>
        <select
          id="categorySelect"
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img src={product.images[0]} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
