import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100');
		const data = await response.json();
		return data;
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
		.addCase(fetchProducts.pending, (state) => {
			state.status = 'loading';
		})
		.addCase(fetchProducts.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.items = action.payload.data;
		})
		.addCase(fetchProducts.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		});
	},
});

export default productsSlice.reducer;
