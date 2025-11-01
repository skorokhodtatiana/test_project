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
		// removeItem(state, action) {
		// 	state.item.pop({
		// 		id: action.payload.id,
		// 		title: action.payload.title,
		// 	})
		// },
	}
})

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;
