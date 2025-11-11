import { createSlice } from "@reduxjs/toolkit";

const choseAuthorSlice = createSlice({
	name: "choseAuthors",
	initialState: {
		item: []
	},
	reducers: {
		addChoseItem(state, action) {
			state.item = [...action.payload]
		}
	}
})

export const { addChoseItem } = choseAuthorSlice.actions;
export default choseAuthorSlice.reducer;
