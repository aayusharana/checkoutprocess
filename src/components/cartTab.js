import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../store/cart';
import { Link } from 'react-router-dom';


const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();

    const subtotal = carts.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    };

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
        transform transition-transform duration-500
        ${statusTab === false ? "translate-x-full" : ""}
        `}>
            <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>

            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='p-5'>
                <h3 className='text-white text-xl'>Subtotal: NPR{subtotal.toFixed(2)}</h3>
            </div>
            <div className='flex justify-between p-4'>
      <button 
        className='flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 mr-2' 
        onClick={handleCloseTabCart}
      >
        CLOSE
      </button>
      <Link to="/Checkoutpros" className='flex-1'>
        <button 
          className='w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400' 
        >
          CHECKOUT
        </button>
      </Link>
    </div>
        </div>
    );
}

export default CartTab;
