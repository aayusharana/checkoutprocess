import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import iconCart from "./../assets/image/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  // Conditionally render the cart icon based on location.pathname
  const shouldRenderCartIcon = location.pathname !== "/Checkoutpros" && location.pathname !== "/Review";

  return (
    <header className="flex justify-between items-center m-5">
      <Link to="/" className="text-xl font-semibold">
        HOME
      </Link>
      {shouldRenderCartIcon && (
        <div
          className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative"
          onClick={handleOpenTabCart}
        >
          <img src={iconCart} alt="iconCart" className="w-7" />
          <span className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {totalQuantity}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
