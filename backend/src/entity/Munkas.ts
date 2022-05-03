import { on } from "events";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Munka } from "./Munka";

@Entity()
export class Munkas {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    oraber: number;

    @Column()
    szakkepzetseg: string;
    
    @Column()
    statusz:string;


    @OneToMany(() => Munka,munka => munka.munkas)
    munkak: Munka[];
}
