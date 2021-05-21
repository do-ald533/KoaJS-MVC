import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection";

export class User extends Model {}

export async function create_table() {
    try {
        await User.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "User",
            modelName: "user",
            sequelize
        }
    );

    await User.sync({ force: true })
    console.log('deu certo')

    } catch (error) {
        console.log(error)
    }

}