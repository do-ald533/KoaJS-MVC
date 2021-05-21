import { Sequelize } from "sequelize";
import { create_table } from "./model/model";


export const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./src/database/database.sqlite",
});

export async function connectDB() {
	try {
		await sequelize.authenticate();
		console.log("connection succesful");
        create_table()
	} catch (err) {
		console.log(err);
	}
}
