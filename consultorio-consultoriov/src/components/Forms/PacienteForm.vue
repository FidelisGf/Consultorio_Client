<template>
  <h1 class="title is-1">Cadastro de Paciente</h1>
  <div class="field">
    <div class="control">
      <input
        class="input nome is-success"
        type="text"
        placeholder="Nome"
        v-model="paciente.nome"
      />
    </div>
    <div class="control">
      <input
        class="input telefone is-success"
        type="tel"
        placeholder="Telefone"
        v-model="paciente.telefone"
      />
    </div>
    <div class="control">
      <input
        class="input celular is-success"
        type="tel"
        placeholder="Celular"
        v-model="paciente.celular"
      />
    </div>
    <div class="control">
      <input
        class="input nacionalidade is-success"
        type="text"
        placeholder="Nacionalidade"
        v-model="paciente.nacionalidade"
      />
    </div>
    <div class="control">
      <input
        class="input cpf is-success"
        type="text"
        placeholder="Cpf"
        v-model="paciente.cpf"
      />
    </div>
    <div class="control">
      <input
        class="input rg is-success"
        type="text"
        placeholder="Rg"
        v-model="paciente.rg"
      />
    </div>
    <div class="control">
      <input
        class="input email is-success"
        type="email"
        placeholder="E-mail"
        v-model="paciente.email"
      />
    </div>
    <div class="control">
      <input
        class="input login is-success"
        type="text"
        placeholder="Login"
        v-model="paciente.login"
      />
    </div>
    <div class="control">
      <input
        class="input senha is-success"
        type="password"
        placeholder="Senha"
        v-model="paciente.senha"
      />
    </div>
    <div class="field">
      <div class="control">
        <label class="label">Sexo</label>
        <div class="select is-rounded is-primary">
          <select aria-placeholder="sexo" v-model="paciente.sexo">
            <option>masculino</option>
            <option>feminino</option>
            <option>outros</option>
          </select>
        </div>
      </div>
    </div>
    <div class="control">
      <input
        class="input nCartao is-success"
        type="text"
        placeholder="Nº do Cartão"
        v-model="paciente.numeroCartaoConvenio"
      />
    </div>
    <div class="field">
      <div class="control">
        <label class="label">Tipo Atendimento</label>
        <div class="select is-rounded is-primary">
          <select aria-placeholder="sexo" v-model="paciente.tipoAtendimento">
            <option>particular</option>
            <option>convenio</option>
          </select>
        </div>
      </div>
    </div>
    <div class="control">
      <input
        class="input convenio is-success"
        type="number"
        placeholder="Convenio"
        v-model="paciente.convenio"
      />
    </div>
    <div class="control">
      <input
        class="button is-primary is-link"
        type="submit"
        value="Cadastrar Paciente"
        @click="onClickCadastrar()"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Paciente } from "@/model/paciente-entity.model";
import { Notification } from "@/model/notification";
import { PacienteClient } from "@/client/paciente.client";
import { Convenio } from "@/model/convenio-entity.model";
import { ConvenioClient } from "@/client/convenio.client";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export default class PacienteForm extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Convenio> = new PageResponse();
  private pacienteClient!: PacienteClient;
  private paciente: Paciente = new Paciente();
  private notification: Notification = new Notification();
  private convenioList: Convenio[] = [];
  private convenioClient!: ConvenioClient;
  private readonly id!: number;
  private readonly model!: string;

  public mounted(): void {
    this.pacienteClient = new PacienteClient();
    this.convenioClient = new ConvenioClient();
    this.listarConvenio();
  }

  private onClickCadastrar() {
    this.pacienteClient.cadastrar(this.paciente).then(
      (sucess) => {
        this.notification = this.notification.new(
          true,
          "notification is-sucess",
          "Paciente Cadastrado com sucesso !!"
        );
        this.onClickLimpar();
      },
      (error) => {
        this.notification = this.notification.new(
          true,
          "notification is-danger",
          "Error" + error
        );
        this.onClickLimpar();
      }
    );
  }
  private listarConvenio(): void {
    this.convenioClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.convenioList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }

  private onClickLimpar() {
    this.paciente = new Paciente();
  }
}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.control {
  margin-top: 10px;
}
.input {
  width: 25%;
  border-radius: 20px;
}
.dp {
  width: 25%;
  border-radius: 20px;
}
.button {
  border-radius: 20px;
}
</style>
