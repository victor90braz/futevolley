import { createSlice } from "@reduxjs/toolkit";
import userTemplate from "../../data/userTemplate";

const initialState = (() => {
	const persistanceState = localStorage.getItem("__redux__state__");

	return persistanceState ? JSON.parse(persistanceState).users : userTemplate;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		addNewUser: (state, action) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;
