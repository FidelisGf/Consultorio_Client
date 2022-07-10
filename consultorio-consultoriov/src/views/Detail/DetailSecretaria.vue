<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Detalhes da Secretária</p>
        </div>
      </div>
      <div class="content">
        <i>Nome : {{ secretaria.nome }}</i>
        <br />
        <br />
        <i>Telefone: {{ secretaria.telefone }}</i>
        <br /><br />
        <i>Celular: {{ secretaria.celular }}</i>
        <br /><br />
        <i>Nacionalidade: {{ secretaria.nacionalidade }}</i>
        <br /><br />
        <i>CPF: {{ secretaria.cpf }}</i>
        <br /><br />
        <i>E-mail: {{ secretaria.email }}</i>
        <br /><br />
        <i>Login: {{ secretaria.login }}</i>
        <br /><br />
        <i>Senha: {{ secretaria.senha }}</i>
        <br /><br />
        <i>Sexo: {{ secretaria.sexo }}</i>
        <br /><br />
        <i>PIS: {{ secretaria.pis }}</i>
        <br /><br />
        <i>Salario: {{ secretaria.salario }}</i>
        <br /><br />
        <i>Data de Contratação: {{ secretaria.dataContratacao }}</i>
        <br /><br />
        <i>Cadastrado em : {{ secretaria.cadastro }}</i>
        <br /><br />
        <div class="columns">
          <div class="column">
            <button
              class="button is-info"
              @click="onClickPaginaEditar(secretaria.id)"
            >
              Editar
            </button>
          </div>
          <div class="column">
            <router-link to="/secretaria"
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
import { SecretariaClient } from "@/client/secretaria.client";
import { Secretaria } from "@/model/secretaria-entity.model";
export default class DetailSecretaria extends Vue {
  private secretariaClient!: SecretariaClient;
  private secretaria: Secretaria = new Secretaria();
  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;

  public mounted(): void {
    this.secretariaClient = new SecretariaClient();
    this.getSecretaria();
  }
  private getSecretaria(): void {
    this.secretariaClient.findById(this.id).then(
      (sucess) => {
        this.secretaria.id = sucess.id;
        this.secretaria.nome = sucess.nome;
        this.secretaria.telefone = sucess.telefone;
        this.secretaria.celular = sucess.celular;
        this.secretaria.nacionalidade = sucess.nacionalidade;
        this.secretaria.cpf = sucess.cpf;
        this.secretaria.rg = sucess.rg;
        this.secretaria.email = sucess.email;
        this.secretaria.login = sucess.login;
        this.secretaria.senha = sucess.senha;
        this.secretaria.sexo = sucess.sexo;
        this.secretaria.pis = sucess.pis;
        this.secretaria.dataContratacao = sucess.dataContratacao;
        this.secretaria.salario = sucess.salario;
        this.secretaria.ativo = sucess.ativo;
        this.secretaria.cadastro = sucess.cadastro;
        this.secretaria.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaEditar(idSecretaria: number) {
    this.$router.push({
      name: "secretaria-editar",
      params: { id: idSecretaria, model: "editar" },
    });
  }
}
</script>

<style></style>
