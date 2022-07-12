<template>
  <h1 class="title is-1">Cadastro de Secretária</h1>
  <div class="columns" v-if="notification.ativo">
    <div class="column is-12">
      <div :class="notification.classe">
        <button @click="onClickFecharNotificacao()" class="delete"></button>
        {{ notification.mensagem }}
      </div>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <input
        class="input nome is-success"
        type="text"
        placeholder="Nome"
        v-model="secretaria.nome"
      />
    </div>
    <div class="control">
      <input
        class="input telefone is-success"
        type="tel"
        placeholder="Telefone"
        v-model="secretaria.telefone"
      />
    </div>
    <div class="control">
      <input
        class="input celular is-success"
        type="tel"
        placeholder="Celular"
        v-model="secretaria.celular"
      />
    </div>
    <div class="control">
      <input
        class="input nacionalidade is-success"
        type="text"
        placeholder="Nacionalidade"
        v-model="secretaria.nacionalidade"
      />
    </div>
    <div class="control">
      <input
        class="input cpf is-success"
        type="text"
        placeholder="Cpf"
        v-model="secretaria.cpf"
      />
    </div>
    <div class="control">
      <input
        class="input rg is-success"
        type="text"
        placeholder="Rg"
        v-model="secretaria.rg"
      />
    </div>
    <div class="control">
      <input
        class="input email is-success"
        type="email"
        placeholder="E-mail"
        v-model="secretaria.email"
      />
    </div>
    <div class="control">
      <input
        class="input login is-success"
        type="text"
        placeholder="Login"
        v-model="secretaria.login"
      />
    </div>
    <div class="control">
      <input
        class="input senha is-success"
        type="password"
        placeholder="Senha"
        v-model="secretaria.senha"
      />
    </div>
    <div class="field">
      <div class="control">
        <label class="label">Sexo</label>
        <div class="select is-rounded is-primary">
          <select aria-placeholder="sexo" v-model="secretaria.sexo">
            <option>masculino</option>
            <option>feminino</option>
            <option>outro</option>
          </select>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="field">
        <label class="label">Data Contratação</label>
        <div class="control">
          <input
            v-model="secretaria.dataContratacao"
            class="input"
            type="datetime-local"
            placeholder="Data de Contratação"
          />
        </div>
      </div>
    </div>
    <div class="control">
      <input
        class="input pis is-success"
        type="text"
        placeholder="PIS"
        v-model="secretaria.pis"
      />
    </div>
    <div class="control">
      <input
        class="input senha is-success"
        type="number"
        placeholder="Salario"
        v-model="secretaria.salario"
      />
    </div>

    <div class="control">
      <input
        class="button is-primary is-sucess"
        type="submit"
        value="Cadastrar Secretaria"
        @click="onClickCadastrar()"
      />
    </div>
    <div class="control">
      <router-link to="/secretaria"
        ><input class="button is-link" type="submit" value="Voltar"
      /></router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Notification } from "@/model/notification";
import { Secretaria } from "@/model/secretaria-entity.model";
import { SecretariaClient } from "@/client/secretaria.client";

export default class SecretariaForm extends Vue {
  private secretariaClient!: SecretariaClient;
  private secretaria: Secretaria = new Secretaria();
  private notification: Notification = new Notification();
  private readonly id!: number;
  private readonly model!: string;

  public mounted(): void {
    this.secretariaClient = new SecretariaClient();
  }

  private onClickCadastrar() {
    this.secretaria.ativo = true;
    this.secretariaClient.cadastrar(this.secretaria).then(
      (sucess) => {
        this.notification = this.notification.new(
          true,
          "notification is-sucess",
          "Secretaria Cadastrada com sucesso !!"
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
    this.secretaria = new Secretaria();
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
