import { createSlice } from "@reduxjs/toolkit";
import userTemplate from "../../data/userTemplate";

export const usersSlice = createSlice({
	name: "users",
	initialState: userTemplate,
	reducers: {
		deleteUserById: (state, action) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;
