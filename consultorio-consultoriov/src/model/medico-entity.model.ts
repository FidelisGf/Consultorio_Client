import { Especialidade } from "./especialidade.entity.model"
import { Pessoa } from "./Pessoa-entity.model"

export class Medico extends Pessoa{
    consultorio! : string
    crm!: string
    porcentagemParticipacao!: number
    valorConsulta!: number
    especialidade !: Especialidade
}