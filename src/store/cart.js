import { createSlice } from "@reduxjs/toolkit";
import { products } from '../products';

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [
        { name: 'Item 1', quantity: 2, price: 10 },
        { name: 'Item 2', quantity: 1, price: 20 },
        
    ],
    
    statusTab: false
    
   
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const product = products.find(product => product.id === productId);
            const indexProductId = state.items.findIndex(item => item.productId === productId);

            const quantityToAdd = parseInt(quantity, 10); 
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantityToAdd;
            } else {
                state.items.push({ 
                    productId, 
                    quantity: quantityToAdd, 
                    price: product.price, 
                    name: product.name, 
                    image: product.image 
                });
            }

            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);

            const newQuantity = parseInt(quantity, 10); // Parse quantity as integer

            if (indexProductId >= 0) {
                if (newQuantity > 0) {
                    state.items[indexProductId].quantity = newQuantity;
                } else {
                    state.items = state.items.filter(item => item.productId !== productId);
                }

                localStorage.setItem("carts", JSON.stringify(state.items));
            }
        },
        toggleStatusTab(state) {
            state.statusTab = !state.statusTab;
        },
        removeItem(state, action) {
            const { productId } = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        updateCart(state, action) {
            state.items = action.payload;
        },
        updateShippingAddress(state, action) {
            state.shippingAddress = action.payload;
        },
        updatePaymentDetails(state, action) {
            state.paymentDetails = action.payload;
        },
        placeOrder(state) {
            state.items = []; 
            state.shippingAddress = '';
            state.paymentDetails = ''; 
            localStorage.removeItem('carts'); 
        },
    }
});

export const { addToCart, changeQuantity, toggleStatusTab, removeItem, updateCart, updateShippingAddress,updatePaymentDetails, placeOrder} = cartSlice.actions;
export default cartSlice.reducer;
