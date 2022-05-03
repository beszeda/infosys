import { Gep } from "./Gep";
import { Munka } from "./Munka";

export interface Feladat {

    id: number;
    nev: string;
    munka:Munka;
    gep:Gep;

}
