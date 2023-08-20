import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollBackUser } from "./Slice/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDataBaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;
		const previousState = store.getState();

		next(action);

		if (type === "users/deleteUserById") {
			const userIdToRomove = payload;
			const userToRemove = previousState.users.find(
				(user) => user.id === userIdToRomove,
			);

			fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRomove}`, {
				method: "DELETE",
			})
				.then(async (res) => {
					if (res.ok) {
						toast.success(`User ${userIdToRomove} deleted correctly`);
					}
					throw new Error("Failed to delete user");
				})
				.catch(() => {
					toast.error(`Error deleting user ${userIdToRomove}`);

					if (userToRemove) {
						store.dispatch(rollBackUser(userToRemove));
					}
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
