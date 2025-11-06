import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	//async (_,{ rejectWithValue, thunkAPI }) => {
	async (url,{ rejectWithValue, signal }) => {
		const controller = new AbortController();
		signal.addEventListener('abort', () => {
			console.log("abort");
			controller.abort();
		})

		// try {
		// 	const response = await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100', {
		// 		signal: thunkAPI.signal
		// 		}
		// 	);

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
