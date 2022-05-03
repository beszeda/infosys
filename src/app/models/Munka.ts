import { Feladat } from "./Feladat";
import { Munkas } from "./Munkas";

export interface Munka {
    id: number;
    tipus: string;
    feladatok:Feladat[];
    munkas: Munkas;

}
