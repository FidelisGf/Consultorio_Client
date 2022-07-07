<template>
  <div class="container">
    <h1 class="titulo">Editar Médico</h1>

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
          <input v-model="medico.ativo" checked type="checkbox" />
          Ativar Médico
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="medico.nome"
          placeholder="nome"
        />
      </div>
    </div>

    <div class="divisoes contato">
      <div class="column is-4 is-size-4">
        <label class="label">Telefone</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="medico.telefone"
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
            v-model="medico.celular"
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
            v-model="medico.nacionalidade"
            placeholder="nacionalidade"
          />
        </div>
      </div>
    </div>

    <div class="divisoes container-docs">
      <div class="column is-6 is-size-6">
        <label class="label">CPF</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="medico.cpf"
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
            v-model="medico.rg"
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
        v-model="medico.email"
        placeholder="e-mail"
      />
    </div>

    <div class="divisoes container-acesso">
      <div class="column is-6 is-size-6">
        <label class="label">Login</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="medico.login"
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
            v-model="medico.senha"
            placeholder="senha"
          />
        </div>
      </div>
    </div>

    <div class="divisoes info-particionadas">
      <div class="column is-4 is-size-4">
        <div class="enums">
          <div class="enum-sexo">
            <label class="label">Sexo</label>
            <div class="control">
              <div class="select">
                <select v-model="medico.sexo">
                  <option>masculino</option>
                  <option>feminino</option>
                  <option>outro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <div class="field">
          <label class="label">CRM</label>
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="medico.crm"
              placeholder="crm"
            />
          </div>
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <div class="field">
          <label class="label">Consultório</label>
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
    </div>

    <div class="divisoes info-medico">
      <div class="column is-4 is-size-4">
        <div class="field">
          <label class="label">Porcentagem de Participação</label>
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="medico.porcentagemParticipacao"
              placeholder="% de participação"
            />
          </div>
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <div class="field">
          <label class="label">Valor Consulta</label>
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="medico.valorConsulta"
              placeholder="valor consulta"
            />
          </div>
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <div class="field">
          <label class="label">ID da Especialidade</label>
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="medico.especialidade"
              placeholder="especialidade"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-cad" to="/medico">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-salvar" @click="onClickEditar()">Salvar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Medico } from "@/model/medico.model";
import { Notification } from "@/model/notification";
import { MedicoClient } from "@/client/medico.client";
import { Prop } from "vue-property-decorator";
export default class MedicoFormEditar extends Vue {
  private medicoClient!: MedicoClient;
  private medico: Medico = new Medico();
  private notification: Notification = new Notification();
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
        this.medico.senha = sucess.senha;
        this.medico.sexo = sucess.sexo;
        this.medico.crm = sucess.crm;
        this.medico.consultorio = sucess.consultorio;
        this.medico.especialidade = sucess.especialidade;
        this.medico.valorConsulta = sucess.valorConsulta;
        this.medico.porcentagemParticipacao = sucess.porcentagemParticipacao;
        this.medico.ativo = sucess.ativo;
        this.medico.cadastro = sucess.cadastro;
        this.medico.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }
  private onClickEditar(): void {
    this.medicoClient.editar(this.medico).then(
      (success) => {
        this.notification = this.notification.new(
          true,
          "notification is-success",
          "Médico Editado com sucesso!!!"
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
    this.medico = new Medico();
  }
}
</script>
