import { Column, Model, Table } from "sequelize-typescript";
@Table({
    tableName: "books",
})
export default class Books extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    ISBN!: string;
    @Column
    public bookname!: string;
    @Column
    public author!: string;
    @Column
    public publishid!: number;
    @Column
    public publishername!: string;
    @Column
    public monthsalecount!: number;
    @Column
    public bookpicname!: string;
    @Column
    public secondctgyId!: number; // 外键
    @Column
    public thirdctgyId!: number; // 外键
    @Column
    public originalprice!: number;
    @Column
    public discount!: number;
}
