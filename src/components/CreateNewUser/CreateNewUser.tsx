import { Button, Card, TextInput, Title } from "@tremor/react";
import React from "react";

export function CreateNewUser() {
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form className="">
				<TextInput placeholder="Id" />
				<TextInput placeholder="Name" />
				<TextInput placeholder="Email" />
				<TextInput placeholder="Github" />
			</form>

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
		</Card>
	);
}
