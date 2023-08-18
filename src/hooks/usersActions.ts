import { deleteUserById } from "../store/Slice/slice";
import { useAppDispatch } from "./store";

export const usersActions = () => {
	const dispatch = useAppDispatch();

	const handleRemoveUser = (id) => {
		dispatch(deleteUserById(id));
	};

	return { handleRemoveUser };
};
