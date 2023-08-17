import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";
import React from "react";

interface User {
	id: string;
	name: string;
	email: string;
	github: string;
}

const users: User[] = [
	{
		id: "1",
		name: "victor",
		email: "victor@gmail.com",
		github: "victor@github.com",
	},
	{
		id: "2",
		name: "bruno",
		email: "bruno@gmail.com",
		github: "bruno@github.com",
	},
	{
		id: "3",
		name: "igor",
		email: "igor@gmail.com",
		github: "igor@github.com",
	},
	{
		id: "4",
		name: "lorena",
		email: "lorena@gmail.com",
		github: "lorena@github.com",
	},
	{
		id: "5",
		name: "denildo",
		email: "denildo@gmail.com",
		github: "denildo@github.com",
	},
	{
		id: "6",
		name: "izabel",
		email: "izabel@gmail.com",
		github: "izabel@github.com",
	},
];

export function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Actions</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.github}</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
