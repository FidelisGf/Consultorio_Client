<template>
  <h1 class="title is-1">Cadastro de Convenio</h1>
  <div class="field">
    <div class="control">
      <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
          <div :class="notification.classe">
            <button @click="onClickFecharNotificacao()" class="delete"></button>
            {{ notification.mensagem }}
          </div>
        </div>
      </div>
      <input
        class="input nome"
        type="text"
        placeholder="Nome"
        v-model="convenio.nome"
      />
    </div>
    <div class="control">
      <input
        class="input valor"
        type="number"
        placeholder="Valor"
        v-model="convenio.valor"
      />
    </div>
    <div class="control">
      <input
        class="button is-primary is-sucess"
        type="submit"
        value="Cadastrar Convenio"
        @click="onClickCadastrar()"
      />
    </div>
    <div class="control">
      <router-link to="/convenio"
        ><input class="button is-link" type="submit" value="Voltar"
      /></router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Convenio } from "@/model/convenio-entity.model";
import { ConvenioClient } from "@/client/convenio.client";
import { Notification } from "@/model/notification";
import { EspecialidadeClient } from "@/client/especialdiade.client";
export default class ConvenioForm extends Vue {
  private convenio = new Convenio();
  private convenioClient = new ConvenioClient();
  private notification: Notification = new Notification();
  public mounted(): void {
    this.convenioClient = new ConvenioClient();
  }
  private onClickCadastrar() {
    this.convenio.ativo = true;
    this.convenioClient.cadastrar(this.convenio).then(
      (sucess) => {
        this.notification = this.notification.new(
          true,
          "notification is-sucess",
          "Convenio Cadastrado com sucesso !!"
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
    this.convenio = new Convenio();
  }

  private onClickFecharNotificacao() {
    this.notification = new Notification();
  }
}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.control {
  margin-top: 10px;
}
.input {
  width: 50%;
  border-radius: 20px;
}
.button {
  border-radius: 20px;
}
</style>
