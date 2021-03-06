import { AbstractEntity } from "./abstract-entity.model";
import { Medico } from "./medico-entity.model";
import { Paciente } from "./paciente-entity.model";
import { Secretaria } from "./secretaria-entity.model";
import { StatusAgenda } from "./statusAgenda.enum";

export class Agenda extends AbstractEntity {
  status!: StatusAgenda;
  dataDe!: Date;
  dataAte!: Date;
  encaixe!: boolean;
  paciente!: Paciente;
  medico!: Medico;
  secretaria!: Secretaria;
}
