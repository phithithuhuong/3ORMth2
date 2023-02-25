//Class PhoneBook sẽ tương ứng với table phone_book trong database.
import {

    Column,

    Entity,

    PrimaryGeneratedColumn,

} from "typeorm";




@Entity()

export class PhoneBook {

    @PrimaryGeneratedColumn()

    public readonly id: number;



    @Column()

    public name: string;



    @Column({ type: "varchar" })

    public address: string;



    @Column({ type: "varchar" })

    public email: string;



    @Column({ type: "varchar" })

    public phone: string;

}