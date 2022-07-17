import { AbstractEntity } from "./abstract-entity.model";
import { Agenda } from "./agenda-entity.model";
import { Paciente } from "./paciente-entity.model";
import { Secretaria } from "./secretaria-entity.model";
import { StatusAgenda } from "./statusAgenda.enum";

export class Historico extends AbstractEntity {
  data!: Date;
  observacao!: string;
  secretaria!: Secretaria;
  paciente!: Paciente;
  agenda!: Agenda;
}
