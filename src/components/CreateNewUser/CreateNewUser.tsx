import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import React, { useState } from "react";
import { usersActions } from "../../hooks/usersActions";

export function CreateNewUser() {
	const { handleAddUser } = usersActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setResult(null);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			setResult("ko");
		} else {
			handleAddUser({ name, email, github });
			setResult("ok");
			form.reset();
		}
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
				<span>
					{result === "ok" && <Badge color="green">User Created</Badge>}
					{result === "ko" && <Badge color="green">Error field</Badge>}
				</span>
			</form>
		</Card>
	);
}
