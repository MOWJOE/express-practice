import { v4 as userID } from "uuid";
userID();

let users = [
	
	{
		firstName: "John",
		lastName: "Doe",
		age: 25,
	},
	{
		firstName: "Jane",
		lastName: "Doe",
		age: 24,
	}];

export const createUser = (req, res) => {
	const user = req.body;
	// const userId = userID();

	// const userWithId = {
	// 	...user,
	// 	id: userID(),
	// };
	users.push({
		...user,
		id: userID(),
	});
	res.send(`User with the name ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id == id);
	res.send(foundUser);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id != id);
	res.send(`USer with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
	const { id } = req.params;

	const { firstName, lastName, age } = req.body;
	const userUpdate = users.find((user) => user.id == id);

	if (firstName) {
		userUpdate.firstName = firstName;
	}
	if (lastName) {
		userUpdate.lastName = lastName;
	}
	if (age) {
		userUpdate.age = age;
	}
	res.send(`USer with the id ${id} has been updated`);
};

export const getUsers = (req, res) => {
	console.log(users);
	res.send(users);
};
