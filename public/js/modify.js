function modify_contact(id) {
	fetch(`http://localhost:3000/modifyContact?id=${id}`, {
		method: "PUT",
		body: {
            
        },
	});
}
