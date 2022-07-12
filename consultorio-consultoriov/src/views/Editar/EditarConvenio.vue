<template>
  <h1 class="title is-1">Editar Convenio</h1>
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
      <div class="columns">
        <div class="column is-12 is-size-3">
          <label class="label">
            <input v-model="convenio.ativo" checked type="checkbox" />
            Ativar Convenio
          </label>
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
        class="button is-primary is-link"
        type="submit"
        value="Editar Convenio"
        @click="onClickEditar()"
      />
    </div>
    <div class="column">
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
import { Prop } from "vue-property-decorator";
export default class EditarConvenio extends Vue {
  private convenio = new Convenio();
  private convenioClient = new ConvenioClient();
  private notification: Notification = new Notification();
  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;
  public mounted(): void {
    this.convenioClient = new ConvenioClient();
    this.getConvenio();
  }
  private getConvenio(): void {
    this.convenioClient.findById(this.id).then(
      (sucess) => {
        this.convenio.id = sucess.id;
        this.convenio.nome = sucess.nome;
        this.convenio.valor = sucess.valor;
        this.convenio.ativo = sucess.ativo;
        this.convenio.cadastro = sucess.cadastro;
        this.convenio.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }
  private onClickEditar(): void {
    this.convenioClient.editar(this.convenio).then(
      (success) => {
        this.notification = this.notification.new(
          true,
          "notification is-success",
          "Convenio Editado com sucesso!!!"
        );
        this.onClickLimpar();
      },
      (error) => {
        this.notification = this.notification.new(
          true,
          "notification is-danger",
          "Error: " + error
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
