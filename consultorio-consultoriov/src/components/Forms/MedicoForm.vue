<template>
  <h1 class="title is-1">Cadastro de medico</h1>
  <div class="field">
    <div class="columns" v-if="notification.ativo">
      <div class="column is-12">
        <div :class="notification.classe">
          <button @click="onClickFecharNotificacao()" class="delete"></button>
          {{ notification.mensagem }}
        </div>
      </div>
    </div>
    <div class="control">
      <input
        class="input nome is-success"
        type="text"
        placeholder="Nome"
        v-model="medico.nome"
      />
    </div>
    <div class="control">
      <input
        class="input telefone is-success"
        type="tel"
        placeholder="Telefone"
        v-model="medico.telefone"
      />
    </div>
    <div class="control">
      <input
        class="input celular is-success"
        type="tel"
        placeholder="Celular"
        v-model="medico.celular"
      />
    </div>
    <div class="control">
      <input
        class="input nacionalidade is-success"
        type="text"
        placeholder="Nacionalidade"
        v-model="medico.nacionalidade"
      />
    </div>
    <div class="control">
      <input
        class="input cpf is-success"
        type="text"
        placeholder="Cpf"
        v-model="medico.cpf"
      />
    </div>
    <div class="control">
      <input
        class="input rg is-success"
        type="text"
        placeholder="Rg"
        v-model="medico.rg"
      />
    </div>
    <div class="control">
      <input
        class="input email is-success"
        type="email"
        placeholder="E-mail"
        v-model="medico.email"
      />
    </div>
    <div class="control">
      <input
        class="input login is-success"
        type="text"
        placeholder="Login"
        v-model="medico.login"
      />
    </div>
    <div class="control">
      <input
        class="input senha is-success"
        type="password"
        placeholder="Senha"
        v-model="medico.senha"
      />
    </div>
    <div class="field">
      <div class="control">
        <label class="label">Sexo</label>
        <div class="select is-rounded is-primary">
          <select aria-placeholder="sexo" v-model="medico.sexo">
            <option>masculino</option>
            <option>feminino</option>
            <option>outros</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          class="input"
          type="number"
          v-model="medico.crm"
          placeholder="crm"
        />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="medico.consultorio"
          placeholder="consultorio"
        />
      </div>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <input
        class="input"
        type="number"
        v-model="medico.porcentagemParticipacao"
        placeholder="% de participação"
      />
    </div>

    <div class="field">
      <div class="control">
        <input
          class="input"
          type="number"
          v-model="medico.valorConsulta"
          placeholder="valor consulta"
        />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          class="input"
          type="number"
          v-model="especialidade.id"
          placeholder="especialidade"
        />
      </div>
    </div>
  </div>
  <div class="control">
    <input
      class="button is-primary is-link"
      type="submit"
      value="Cadastrar medico"
      @click="onClickCadastrar()"
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Medico } from "@/model/medico-entity.model";
import { Notification } from "@/model/notification";
import { MedicoClient } from "@/client/medico.client";
import { Convenio } from "@/model/convenio-entity.model";
import { ConvenioClient } from "@/client/convenio.client";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Especialidade } from "@/model/especialidade.entity.model";
export default class MedicoForm extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Convenio> = new PageResponse();
  private medicoClient!: MedicoClient;
  private medico: Medico = new Medico();
  private especialidade: Especialidade = new Especialidade();
  private notification: Notification = new Notification();

  private readonly id!: number;
  private readonly model!: string;

  public mounted(): void {
    this.medicoClient = new MedicoClient();
  }

  private onClickCadastrar() {
    this.medico.especialidade = this.especialidade;
    this.medico.ativo = true;
    this.medicoClient.cadastrar(this.medico).then(
      (sucess) => {
        this.notification = this.notification.new(
          true,
          "notification is-sucess",
          "Medico Cadastrado com sucesso !!"
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

  private onClickLimpar() {
    this.medico = new Medico();
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
