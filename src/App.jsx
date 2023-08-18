import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser/CreateNewUser";
import { ListOfUsers } from "./components/ListOfUsers/ListOfUsers.tsx";

function App() {
	return (
		<>
			<ListOfUsers />
			<CreateNewUser />
		</>
	);
}

export default App;
