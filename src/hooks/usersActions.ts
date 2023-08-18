import { addNewUser, deleteUserById } from "../store/Slice/slice";
import { useAppDispatch } from "./store";

export const usersActions = () => {
	const dispatch = useAppDispatch();

	const handleRemoveUser = (id) => {
		dispatch(deleteUserById(id));
	};

	const handleAddUser = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }));
	};

	return { handleRemoveUser, handleAddUser };
};
