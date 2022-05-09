import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Feladat } from "../entity/Feladat";
import { Controller } from "./Controller";

export class FeladatController extends Controller {
    repository = getRepository(Feladat);

    getAll = async (req: Request, res: Response) => {
        try {
            const entities = await this.repository.query("select * from feladat");
            res.json(entities); 
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    };

}