
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    cartItems: [],
}

const CartSlice = createSlice({   //slice can be said as a container containing the state with all the operations that can be performed on that state
    name: 'cart',       //name of the container
    initialState,       //the initial state
    reducers: {         //all the functions that can be performed on the state
    addItemToCart(state, action){    //here the action is the payload that is to be passed to the function
        const existingItem = state.cartItems.find((item) => {item.id === action.payload.id 
            return item})
        if (existingItem){
            existingItem.quantity += 1
        }
        else{
            state.cartItems.push({...action.payload, quantity: 1})
        }
    },

    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
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
export const {     //exporting the functions or actions
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
    } = CartSlice.actions;
export default CartSlice.reducer;


