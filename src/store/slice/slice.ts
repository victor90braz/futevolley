import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../data/interface/interface";

const initialUserState: User = {
	id: "",
	name: "",
	email: "",
	github: "",
};

export const usersSlice = createSlice({
	name: "users",
	initialState: initialUserState,
	reducers: {},
});
