import { getRepository } from "typeorm";
import { Gep } from "../entity/Gep";
import { Controller } from "./Controller";

export class GepController extends Controller {
    repository = getRepository(Gep);
}