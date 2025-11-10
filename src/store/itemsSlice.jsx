import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (url,{ signal, rejectWithValue }) => {
		try {
			const response = await fetch(url, { signal });
			if (!response.ok) {
				console.log("!response.ok");
				return rejectWithValue('Ошибка сети при запросе данных');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			if (error.name === 'AbortError') {
				console.log("error.name " + error.name);
				return 'Aborted';
			}
			return rejectWithValue(error.message || 'Неизвестная ошибка');
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		items: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
		.addCase(fetchProducts.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		})
		.addCase(fetchProducts.fulfilled, (state, action) => {
			state.items = action.payload.data;
			state.status = 'succeeded';
			state.error = null;
		})
		.addCase(fetchProducts.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.payload;
		});
	},
});

export default productsSlice.reducer;
