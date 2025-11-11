import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './itemsSlice';
import authorReducer from './choseAuthorSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		author: authorReducer,
	},
});

export default store;
