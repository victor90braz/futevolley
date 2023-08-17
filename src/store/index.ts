import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Slice/slice";

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});
