import { Button, Card, TextInput, Title } from "@tremor/react";
import React from "react";
import { toast } from "sonner";
import { usersActions } from "../../hooks/usersActions";

export function CreateNewUser() {
	const { handleAddUser } = usersActions();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			toast.error("Fill all the fields");
			return;
		}

		await handleAddUser({ name, email, github });

		toast.success(`User ${name} created correctly`);
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form className="" onSubmit={handleSubmit}>
				<TextInput placeholder="Name" name="name" />
				<TextInput placeholder="Email" name="email" />
				<TextInput placeholder="Github" name="github" />

				<Button
					type="submit"
					style={{
						marginTop: "16px",
						backgroundColor: "#007bff",
						color: "#fff",
						border: "none",
						borderRadius: "8px",
						padding: "10px 20px",
						fontSize: "16px",
						cursor: "pointer",
						boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
					}}
				>
					Create User
				</Button>
			</form>
		</Card>
	);
}
