import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './itemsSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
	},
});

export default store;
