import { on } from "events";
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { Gep } from "./Gep";
import { Munka } from "./Munka";

@Entity()
export class Feladat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nev: string;

   @ManyToOne(()=> Munka,munka =>munka.feladatok )
   munka:Munka;

   @OneToOne(() => Gep)
   @JoinColumn()
   gep:Gep;

}
