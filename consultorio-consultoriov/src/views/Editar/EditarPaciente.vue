<template>
  <h1 class="title is-1">Editar Paciente</h1>
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
        <input v-model="paciente.ativo" checked type="checkbox" />
        Ativar Paciente
      </label>
    </div>
  </div>
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

    <div class="field">
      <div class="control">
        <label class="label">Tipo Atendimento</label>
        <div class="select is-rounded is-primary">
          <select
            aria-placeholder="Tipo Atendimento"
            v-model="paciente.tipoAtendimento"
          >
            <option>particular</option>
            <option>convenio</option>
          </select>
        </div>
      </div>
    </div>
    <div class="control">
      <input
        class="input"
        type="text"
        v-model="paciente.numeroCartaoConvenio"
        placeholder="n° cartão convênio"
      />
    </div>
    <div class="column">
      <div class="field">
        <label class="label">Data Vencimento</label>
        <div class="control">
          <input
            v-model="paciente.dataVencimento"
            class="input"
            type="datetime-local"
            placeholder="data vencimento"
          />
        </div>
      </div>
    </div>

    <div class="control">
      <input
        class="button is-primary is-sucess"
        type="submit"
        value="Editar Paciente"
        @click="onClickEditar()"
      />
    </div>
    <div class="control">
      <router-link to="/paciente"
        ><input class="button is-link" type="submit" value="Voltar"
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Paciente } from "@/model/paciente-entity.model";
import { Notification } from "@/model/notification";
import { PacienteClient } from "@/client/paciente.client";
import { Prop } from "vue-property-decorator";
export default class EditarPaciente extends Vue {
  private pacienteClient!: PacienteClient;
  private paciente: Paciente = new Paciente();
  private notification: Notification = new Notification();
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
  private onClickEditar(): void {
    this.pacienteClient.editar(this.paciente).then(
      (success) => {
        this.notification = this.notification.new(
          true,
          "notification is-success",
          "Paciente Editado com sucesso!!!"
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
  private onClickFecharNotificacao(): void {
    this.notification = new Notification();
  }
  private onClickLimpar(): void {
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
