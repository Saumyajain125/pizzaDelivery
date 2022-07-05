
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Orders extends Model<Orders>{

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    User_id: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    Price: number;
}
