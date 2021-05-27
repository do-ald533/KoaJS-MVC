function delete_contact() {
	const user_id = document.querySelector("#user_id").innerHTML;
	fetch(`http://localhost:3000/deleteContact?id=${user_id}`, {
		method: "DELETE",
	});
}
