<template>
  <div class="container">
    <h1 class="titulo">Editar Paciente</h1>

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
      <label class="label">Nome</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="paciente.nome"
          placeholder="nome"
        />
      </div>
    </div>

    <div class="">
      <div class="column is-4 is-size-4">
        <label class="label">Telefone</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="paciente.telefone"
            placeholder="telefone"
          />
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <label class="label">Celular</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="paciente.celular"
            placeholder="celular"
          />
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <label class="label">Nacionalidade</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="paciente.nacionalidade"
            placeholder="nacionalidade"
          />
        </div>
      </div>
    </div>

    <div class="divisoes">
      <div class="column is-6 is-size-6">
        <label class="label">CPF</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="paciente.cpf"
            placeholder="cpf"
          />
        </div>
      </div>

      <div class="column is-6 is-size-6">
        <label class="label">RG</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="paciente.rg"
            placeholder="rg"
          />
        </div>
      </div>
    </div>

    <label class="label">Email</label>
    <div class="control">
      <input
        class="input"
        type="email"
        v-model="paciente.email"
        placeholder="e-mail"
      />
    </div>

    <div class="divisoes">
      <div class="column is-6 is-size-6">
        <label class="label">Login</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="paciente.login"
            placeholder="login"
          />
        </div>
      </div>

      <div class="column is-6 is-size-6">
        <label class="label">Senha</label>
        <div class="control">
          <input
            class="input"
            type="password"
            v-model="paciente.senha"
            placeholder="senha"
          />
        </div>
      </div>
    </div>

    <div class="divisoes">
      <div class="column is-6 is-size-6">
        <div class="enums">
          <div class="enum-sexo">
            <label class="label">Sexo</label>
            <div class="control">
              <div class="select">
                <select v-model="paciente.sexo">
                  <option>masculino</option>
                  <option>feminino</option>
                  <option>outro</option>
                </select>
              </div>
            </div>
          </div>
          <div class="enum-tipo-atendimento">
            <label class="label">Tipo Atendimento</label>
            <div class="control">
              <div class="select">
                <select v-model="paciente.tipoAtendimento">
                  <option>convenio</option>
                  <option>particular</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3 is-size-3">
        <div class="field">
          <label class="label">N° Cartão Convênio</label>
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="paciente.numeroCartaoConvenio"
              placeholder="n° cartão convênio"
            />
          </div>
        </div>
      </div>

      <div class="column is-3 is-size-3">
        <div class="field">
          <label class="label">Data Vencimento</label>
          <div class="control">
            <input
              class="input"
              type="datetime-local"
              v-model="paciente.dataVencimento"
              placeholder="data vencimento"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Convênio</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="paciente.convenio"
          placeholder="convênio"
        />
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-cad" to="/paciente">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-salvar" @click="onClickEditar()">Salvar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Paciente } from "@/model/paciente-entity.model";
import { Notification } from "@/model/notification";
import { PacienteClient } from "@/client/paciente.client";
import { Prop } from "vue-property-decorator";
export default class PacienteFormEditar extends Vue {
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
