import { createSlice } from "@reduxjs/toolkit";
import userTemplate from "../../data/userTemplate";

export const usersSlice = createSlice({
	name: "users",
	initialState: userTemplate,
	reducers: {},
});
