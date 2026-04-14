import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Components/CartSlice'
const store = configureStore({      //creating the store where all the slices functions will be stored, so that it will be easy to export
    reducer: {
        cart: cartReducer,    //the cart slice is stored here
    }
})
export default store