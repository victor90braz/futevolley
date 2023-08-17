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
					</TableRow>
				</TableHead>

				<TableBody>
					{userTemplate.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell
								style={{ display: "flex", alignItems: "center", gap: "10px" }}
							>
								<img
									src={`https://unavatar.io/github/${item.github}`}
									alt={`${item.name}`}
									style={{ width: "50px", height: "50px", borderRadius: "50%" }}
								/>

								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.github}</TableCell>
							<TableCell>{item.action}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
