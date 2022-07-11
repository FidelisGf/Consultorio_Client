<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Detalhes do Medico</p>
        </div>
      </div>
      <div class="content">
        <i>Nome : {{ medico.nome }}</i>
        <br />
        <br />
        <i>Telefone: {{ medico.telefone }}</i>
        <br /><br />
        <i>Celular: {{ medico.celular }}</i>
        <br /><br />
        <i>Nacionalidade: {{ medico.nacionalidade }}</i>
        <br /><br />
        <i>CPF: {{ medico.cpf }}</i>
        <br /><br />
        <i>E-mail: {{ medico.email }}</i>
        <br /><br />
        <i>Login: {{ medico.login }}</i>
        <br /><br />
        <i>Senha: {{ medico.senha }}</i>
        <br /><br />
        <i>Sexo: {{ medico.sexo }}</i>
        <br /><br />
        <i>Consultorio : {{ medico.consultorio }}</i>
        <br /><br />
        <i>Valor da Consulta: {{ medico.valorConsulta }}</i>
        <br /><br />
        <i>CRM : {{ medico.crm }}</i>
        <br /><br />
        <i
          >Porcentagem de Participação :
          {{ medico.porcentagemParticipacao }} %</i
        >
        <br /><br />
        <i>Cadastrado em : {{ medico.cadastro }}</i>
        <br /><br />
        <div class="columns">
          <div class="column">
            <button
              class="button is-info"
              @click="onClickPaginaEditar(medico.id)"
            >
              Editar
            </button>
          </div>
          <div class="column">
            <router-link to="/medico"
              ><input class="button is-link" type="submit" value="Voltar"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Prop } from "vue-property-decorator";
import { MedicoClient } from "@/client/medico.client";
import { Medico } from "@/model/medico-entity.model";
export default class DetailMedico extends Vue {
  private medicoClient!: MedicoClient;
  private medico: Medico = new Medico();
  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;

  public mounted(): void {
    this.medicoClient = new MedicoClient();
    this.getMedico();
  }
  private getMedico(): void {
    this.medicoClient.findById(this.id).then(
      (sucess) => {
        this.medico.id = sucess.id;
        this.medico.nome = sucess.nome;
        this.medico.telefone = sucess.telefone;
        this.medico.celular = sucess.celular;
        this.medico.nacionalidade = sucess.nacionalidade;
        this.medico.cpf = sucess.cpf;
        this.medico.rg = sucess.rg;
        this.medico.email = sucess.email;
        this.medico.login = sucess.login;
        this.medico.crm = sucess.crm;
        this.medico.consultorio = sucess.consultorio;
        this.medico.valorConsulta = sucess.valorConsulta;
        this.medico.porcentagemParticipacao = sucess.porcentagemParticipacao;
        this.medico.senha = sucess.senha;
        this.medico.sexo = sucess.sexo;
        this.medico.ativo = sucess.ativo;
        this.medico.cadastro = sucess.cadastro;
        this.medico.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaEditar(idMedico: number) {
    this.$router.push({
      name: "medico-editar",
      params: { id: idMedico, model: "editar" },
    });
  }
}
</script>

<style></style>
