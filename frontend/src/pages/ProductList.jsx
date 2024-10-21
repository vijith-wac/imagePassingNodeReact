import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 40, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product.id}> {/* Adjust column sizes for smaller screens */}
            <div className="card shadow-sm border-light h-100"> {/* h-100 to make all cards equal height */}
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column"> {/* Flexbox to align content */}
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary mt-auto" // mt-auto to push button to the bottom
                  onClick={() => handleAddToCart(product)}
                >
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
