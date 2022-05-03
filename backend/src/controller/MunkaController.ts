import { getRepository } from "typeorm";
import { Munka } from "../entity/Munka";
import { Controller } from "./Controller";

export class MunkaController extends Controller {
    repository = getRepository(Munka);
}