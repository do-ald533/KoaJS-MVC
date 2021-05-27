function delete_contact(id) {
	const user_id = Number(id);
    console.log(user_id)
	fetch(`http://localhost:3000/deleteContact?id=${user_id}`, {
		method: "DELETE",
	});
}
