import axios from "axios";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/UsersService";


function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then(res => setUsers(res.data));
	}, []);

	return (<>
		<h1>Users</h1>
		<ul>
			{
				users.map((user, i) => {
					return <li key={i}>{i}: {user.username}</li>
				})
			}
		</ul>
	</>);
}

export default Users;