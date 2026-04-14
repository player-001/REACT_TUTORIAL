
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    cartItems: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addItemToCart(state, action){    //here the action payload is the cart object
        const existingItem = state.cartItems.find(item => item.id === action.payload.id)
        if (existingItem){
            existingItem.quantity += 1
        }
        else{
            state.cartItems.push({...action.payload, quantity: 1})
        }
    },

    removeItemFromCart(state, action){   //here the payload/action is the item id
        state.cartItems = state.cartItems.filter(item.id !== action.payload)
    },

    clearCart(state){
        state.cartItems = []
    },

    increaseItemQuantity(state, action){
        const itemToIncrease = state.cartItems.find((item) => {item.id == action.payload
        return item})
        if (itemToIncrease){
            itemToIncrease.quantity += 1
        }
    },
    decreaseItemQuantity(state, action){
        const itemToDecrease = state.cartItems.find(item => item.id === action.payload)
        if (itemToDecrease && itemToDecrease.quantity){
            itemToDecrease.quantity -= 1
        }
    },
    

    }
});
export const {
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
    } = CartSlice.actions;
export default CartSlice.reducer;


