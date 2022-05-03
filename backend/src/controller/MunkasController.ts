import { getRepository } from "typeorm";
import { Munkas } from "../entity/Munkas";
import { Controller } from "./Controller";

export class MunkasController extends Controller {
    repository = getRepository(Munkas);
}