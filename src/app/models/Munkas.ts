import { Munka } from "./Munka";

export interface Munkas {
    id: number;
    firstName: string;
    lastName: string;
    oraber: number;
    szakkepzetseg: string;
    statusz:string;
    munkak: Munka[];
}
