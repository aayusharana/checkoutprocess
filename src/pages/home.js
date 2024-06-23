import React from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl my-5 text-center">List Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCart key={index} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
