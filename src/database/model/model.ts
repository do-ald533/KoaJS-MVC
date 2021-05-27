import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
import { sequelize } from "../connection";

export class User extends Model {}

export async function create_table() {
	try {
		await User.init(
			{
				id: {
					primaryKey: true,
					type: DataTypes.UUIDV4,
					defaultValue: UUIDV4
				},
				firstname: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				lastname: {
					type: DataTypes.STRING,
				},
                email: {
                    type: DataTypes.STRING
                },
				age: {
					type: DataTypes.INTEGER,
				},
			},
			{
				tableName: "User",
				modelName: "user",
				sequelize,
			}
		);

		await User.sync();
		console.log("deu certo");
	} catch (error) {
		console.log(error);
	}
}
