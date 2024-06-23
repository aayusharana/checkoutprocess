import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const Review = () => {
    const items = useSelector((state) => state.cart.items);
    const shippingAddress = useSelector((state) => state.cart.shippingAddress);
    const paymentDetails = useSelector((state) => state.cart.paymentDetails);
    const dispatch = useDispatch();

    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shippingCost = 5; 
    const taxes = 2; 
    const totalAmount = subtotal + shippingCost + taxes;

    return (
        <div className="max-w-3xl mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Items in Cart</h2>
                <ul className="list-disc list-inside mb-4">
                    {items.map((item, index) => (
                        <li key={index} className="mb-2">
                            {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                        </li>
                    ))}
                </ul>
                <p className="mb-2">Subtotal: ${subtotal.toFixed(2)}</p>
                {shippingCost > 0 && <p className="mb-2">Shipping Cost: ${shippingCost}</p>}
                {taxes > 0 && <p className="mb-2">Taxes: ${taxes}</p>}
                <h3 className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h3>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
                <p>{shippingAddress}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
                <p>{paymentDetails}</p>
            </section>

            <button className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Place Order</button>

            <div className="flex justify-between mt-4">
                <button
                    onClick={() => alert('Edit Cart')}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Edit Cart
                </button>
                <button
                    onClick={() => alert('Edit Shipping Info')}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Edit Shipping Info
                </button>
                <button
                    onClick={() => alert('Edit Payment Details')}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Edit Payment Details
                </button>
            </div>
        </div>
    );
};

export default Review;
