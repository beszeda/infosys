import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Gep {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipus: string;

    

}
