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
		removeItem (state, action) {
			state.item = state.item.filter(el => el.item.id !== action.payload)
		},
	}
})

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
