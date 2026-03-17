import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'item',
	initialState: {
		item: []
	},
	reducers: {
		addItem(state, action) {
			state.item.push({
				item: action.payload
			})
		},
		removeItem(state, action) {
			state.item.pop({
				item: action.payload.filter(el => el.id !== action.payload.id)
			})
		},
	}
})

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
