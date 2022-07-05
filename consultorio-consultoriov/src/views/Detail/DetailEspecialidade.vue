<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Detalhes da Especialidade</p>
        </div>
        </div>

        <div class="content">
          <i> Nome : {{especialidade.nome}} </i>
          <br> <br>
          <i v-if="especialidade.ativo" style="color: limegreen"> Ativo</i>
          <i v-if="!especialidade.ativo" style="color: red;"> Inativo</i>
          <br><br>
          <i>Cadastrado em : {{especialidade.cadastro}}</i>

          <br><br>
          <div class="columns">
            <div class="column">
              <button class="button is-info" @click="onClickPaginaEditar(especialidade.id)">Editar</button>
            </div>
            <div class="column">
             <button @click="desativarEspecialidade(especialidade)" class="button  is-danger">Desativar</button>
            </div>
            <div class="column">
              <router-link to="/especialidade"><input class="button is-link" type="submit" value="Voltar"></router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  import { PageRequest } from '@/model/page/page-request'
  import { PageResponse } from '@/model/page/page-response'
  import { Especialidade } from '@/model/especialidade.entity.model'
  import { EspecialidadeClient } from '@/client/especialdiade.client'
  import { Prop } from 'vue-property-decorator'
  export default class DetailEspecialidade extends Vue{
    private especialidadeClient!: EspecialidadeClient
    private especialidade : Especialidade = new Especialidade()
    @Prop({type: Number, required: false})
    private readonly id!: number
    @Prop({type: String, default: false})
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
                console.log(this.especialidade.nome);
              },
              error => console.log(error)
          )
    }
    private onClickPaginaEditar(idEspecialidade: number){
      this.$router.push({ name: 'especialidade-editar', params: { id: idEspecialidade, model: 'editar' } })
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

<style>

</style>