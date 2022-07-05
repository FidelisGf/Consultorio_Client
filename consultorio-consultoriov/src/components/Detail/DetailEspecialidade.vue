<template>
    <h1 class="tittle">Detalhes Especialidade</h1>
     <div class="field">
        <div class="control">
            <i>Nome : {{especialidade.id}}</i>
        </div>
        <div class="control">
            <i v-if="especialidade.ativo" style="color: limegreen"> Ativo</i>
            <i v-if="!especialidade.ativo" style="color: red;"> Inativo</i> 
        </div>   
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Especialidade } from '@/model/especialidade.entity.model'
import { EspecialidadeClient } from '@/client/especialdiade.client'


export default class EspecialidadeTable extends Vue {
    private especialidadeClient!: EspecialidadeClient
    private especialidade : Especialidade = new Especialidade()
   
    private readonly id!: number
   
    private readonly model!: string
    public mounted(): void {
        this.especialidadeClient = new EspecialidadeClient()
        this.getEspecialidade()
    }
    private getEspecialidade(): void {
    this.especialidadeClient.findById(this.id)
        .then(
            sucess => {
              this.especialidade.id = sucess.id
              this.especialidade.nome = sucess.nome
              this.especialidade.ativo = sucess.ativo
              this.especialidade.cadastro = sucess.cadastro
              this.especialidade.atualizado = sucess.atualizado
            },
            error => console.log(error)
        )
  }
  private onClickPaginaEditar(idEspecialidade: number){
    this.$router.push({ name: 'editarEspecialidade', params: { id: idEspecialidade, model: 'editar' } })
  }
  private desativarEspecialidade(especialidadeDesativar: Especialidade){
    especialidadeDesativar.id = this.especialidade.id
    especialidadeDesativar.nome = this.especialidade.nome
    especialidadeDesativar.ativo = false
    especialidadeDesativar.cadastro = this.especialidade.cadastro
    especialidadeDesativar.atualizado = this.especialidade.atualizado
    this.especialidadeClient.editar(especialidadeDesativar)
    this.$router.push({name: 'especialidade'})
  }

}
</script>