import { AbstractEntity } from "./abstract-entity.model";
import { Pessoa } from "./Pessoa-entity.model";

export class Secretaria extends Pessoa {
  pis!: number;
  dataContratacao!: Date;
  salario!: number;
}
