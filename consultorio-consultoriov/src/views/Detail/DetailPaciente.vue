<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Detalhes do Paciente</p>
        </div>
      </div>
      <div class="content">
        <i>Nome : {{ paciente.nome }}</i>
        <br />
        <br />
        <i>Telefone: {{ paciente.telefone }}</i>
        <br /><br />
        <i>Celular: {{ paciente.celular }}</i>
        <br /><br />
        <i>Nacionalidade: {{ paciente.nacionalidade }}</i>
        <br /><br />
        <i>CPF: {{ paciente.cpf }}</i>
        <br /><br />
        <i>E-mail: {{ paciente.email }}</i>
        <br /><br />
        <i>Login: {{ paciente.login }}</i>
        <br /><br />
        <i>Senha: {{ paciente.senha }}</i>
        <br /><br />
        <i>Sexo: {{ paciente.sexo }}</i>
        <br /><br />
        <i>Tipo de Atendimento: {{ paciente.tipoAtendimento }}</i>
        <br /><br />
        <i>N° Cartão Convênio: {{ paciente.numeroCartaoConvenio }}</i>
        <br /><br />
        <i>Data de Vencimento: {{ paciente.dataVencimento }}</i>
        <br /><br />
        <i>Convênio: {{ paciente.convenio }}</i>
        <br /><br />
        <i>Cadastrado em : {{ paciente.cadastro }}</i>
        <br /><br />
        <div class="columns">
          <div class="column">
            <button
              class="button is-info"
              @click="onClickPaginaEditar(paciente.id)"
            >
              Editar
            </button>
          </div>
          <div class="column">
            <router-link to="/paciente"
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
import { Paciente } from "@/model/paciente-entity.model";
import { PacienteClient } from "@/client/paciente.client";
import { Prop } from "vue-property-decorator";
export default class DetailPaciente extends Vue {
  private pacienteClient!: PacienteClient;
  private paciente: Paciente = new Paciente();
  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;

  public mounted(): void {
    this.pacienteClient = new PacienteClient();
    this.getPaciente();
  }
  private getPaciente(): void {
    this.pacienteClient.findById(this.id).then(
      (sucess) => {
        this.paciente.id = sucess.id;
        this.paciente.nome = sucess.nome;
        this.paciente.telefone = sucess.telefone;
        this.paciente.celular = sucess.celular;
        this.paciente.nacionalidade = sucess.nacionalidade;
        this.paciente.cpf = sucess.cpf;
        this.paciente.rg = sucess.rg;
        this.paciente.email = sucess.email;
        this.paciente.login = sucess.login;
        this.paciente.senha = sucess.senha;
        this.paciente.sexo = sucess.sexo;
        this.paciente.tipoAtendimento = sucess.tipoAtendimento;
        this.paciente.numeroCartaoConvenio = sucess.numeroCartaoConvenio;
        this.paciente.dataVencimento = sucess.dataVencimento;
        this.paciente.convenio = sucess.convenio;
        this.paciente.ativo = sucess.ativo;
        this.paciente.cadastro = sucess.cadastro;
        this.paciente.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaEditar(idPaciente: number) {
    this.$router.push({
      name: "paciente-editar",
      params: { id: idPaciente, model: "editar" },
    });
  }
}
</script>

<style></style>
