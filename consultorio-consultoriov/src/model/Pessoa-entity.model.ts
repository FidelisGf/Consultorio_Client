import { AbstractEntity } from "./abstract-entity.model"
import { Sexo } from "./sexo.model"

export class Pessoa extends AbstractEntity { 
    nome!:string
    telefone!: number
    celular!: number
    nacionalidade!: string
    cpf!: string
    rg!: string
    email!: string
    login!: string
    senha!: string
    sexo! : Sexo
}