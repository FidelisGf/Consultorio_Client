import { Convenio } from "./convenio-entity.model"
import { Pessoa } from "./Pessoa-entity.model"
import { TipoAtendimento } from "./tipoAtendimento.enum"

export class Paciente extends Pessoa{ 
    numeroCartaoConvenio!: string
    dataVencimento!: Date
    tipoAtendimento!: TipoAtendimento
    convenio !: Convenio
}