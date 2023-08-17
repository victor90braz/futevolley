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
import userTemplate from "../../data/userTemplate.jsx";

export function ListOfUsers() {
	if (userTemplate.length === 0) {
		return <div>No users available.</div>;
	}

	const keys = Object.keys(userTemplate[0]);

	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						{keys.map((key) => (
							<TableHeaderCell key={key}>{key}</TableHeaderCell>
						))}
						<TableHeaderCell>Actions</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{userTemplate.map((item) => (
						<TableRow key={item.id}>
							{keys.map((key) => (
								<TableCell key={key}>{item[key]}</TableCell>
							))}
							<TableCell>Actions</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
