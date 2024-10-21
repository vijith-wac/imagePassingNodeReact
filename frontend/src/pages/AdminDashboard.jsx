// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '', images: ['', ''], category: '' });
  const [editingProduct, setEditingProduct] = useState(null);


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

  const handleDelete=()=>{

  }
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <h3>Product List</h3>
    <Link to='/addproduct' className='btn btn-success'>Add Product</Link>
      <div className='row'>
      {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img src={product.images[0]} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(product)}>
                  Delete
                </button>
                <button className='btn btn-secondary'>Edit</button>
              </div>
            </div>
          </div>
        ))}

      </div>
      
    </div>
  );
};

export default AdminDashboard;
