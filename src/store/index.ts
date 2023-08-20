import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer from "./Slice/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDataBaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;

		next(action);

		if (type === "users/deleteUserById") {
			fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
				method: "DELETE",
			})
				.then(async (res) => {
					if (res.ok) {
						toast.success(`User ${payload} deleted correctly`);
					}
					throw new Error("Failed to delete user");
				})
				.catch(() => {
					toast.error(`Error deleting user ${action.payload}`);
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWithDataBaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
