import { Card, TextInput, Title } from "@tremor/react";
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
		</Card>
	);
}
