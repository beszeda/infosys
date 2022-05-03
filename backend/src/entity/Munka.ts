import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Feladat } from "./Feladat";
import { Munkas } from "./Munkas";

@Entity()
export class Munka {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipus: string;

    @OneToMany(() => Feladat,feladat => feladat.munka)
    feladatok:Feladat[];  

    @ManyToOne(() => Munkas,munkas => munkas.munkak)
    munkas: Munkas;

}
