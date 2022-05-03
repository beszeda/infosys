import { getRepository } from "typeorm";
import { Feladat } from "../entity/Feladat";
import { Controller } from "./Controller";

export class FeladatController extends Controller {
    repository = getRepository(Feladat);
}