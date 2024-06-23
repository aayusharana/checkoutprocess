import React, { useState, useEffect } from 'react';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity, removeItem } from '../store/cart';

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  useEffect(() => {
    console.log('CartItem rendered with:', { productId, quantity, detail });
  }, [productId, quantity, detail]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
      }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }));
  };

  const handleRemove = () => {
    dispatch(removeItem({ productId }));
  };

  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
      <img src={detail?.image} alt={detail?.name} className='w-12' />
      <h3>{detail?.name}</h3>
      <div className='flex-grow flex items-center justify-between'>
        <p>${(detail?.price * quantity).toFixed(2)}</p>
        <div className='w-20 flex justify-between gap-2'>
          <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
          <span>{quantity}</span>
          <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
        </div>
      </div>
      <button className='bg-red-600 rounded-full w-5 h-5 text-white' onClick={handleRemove}>x</button>
    </div>
  );
};

export default CartItem;
