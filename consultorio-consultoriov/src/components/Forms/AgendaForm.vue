<template>
  <div class="field">
    <div class="control">
      <div class="columns">
        <div class="column">
          <h1 class="title is-2">Cadastro de Agenda</h1>
        </div>
      </div>
    </div>
    <div class="columns" v-if="notification.ativo">
      <div class="column is-12">
        <div :class="notification.classe">
          <button @click="onClickFecharNotificacao()" class="delete"></button>
          {{ notification.mensagem }}
        </div>
      </div>
    </div>
    <br />
    <div class="columns mt-5">
      <div class="column">
        <label class="label">Data de</label>
        <div class="control">
          <input class="input" type="datetime-local" v-model="agenda.dataDe" />
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <label class="label">Data ate</label>
        <div class="control">
          <input class="input" type="datetime-local" v-model="agenda.dataAte" />
        </div>
      </div>
    </div>
    <div class="columns mt-5 pt-5">
      <div class="column is-one-third">
        <label class="label">Paciente</label>
        <div class="control">
          <div class="select is-rounded is-primary">
            <select v-model="paciente.id">
              <option
                :value="item.id"
                v-for="item in pacienteList"
                :key="item.id"
              >
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <label class="label">Medico</label>
        <div class="control">
          <div class="select is-rounded is-primary">
            <select v-model="medico.id">
              <option
                :value="item.id"
                v-for="item in medicoList"
                :key="item.id"
              >
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <label class="label">Secretaria</label>
        <div class="control">
          <div class="select is-rounded is-primary">
            <select v-model="secretaria.id">
              <option
                :value="item.id"
                v-for="item in secretariaList"
                :key="item.id"
              >
                {{ item.nome }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="columns mt-5">
      <div class="column is-full">
        <div class="control">
          <input
            class="button is-primary is-sucess btn_Cad"
            type="submit"
            value="Realizar Agendamento"
            @click="onClickCadastrar()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { AgendaClient } from "@/client/agenda.client";
import { MedicoClient } from "@/client/medico.client";
import { PacienteClient } from "@/client/paciente.client";
import { SecretariaClient } from "@/client/secretaria.client";
import { Agenda } from "@/model/agenda-entity.model";
import { Medico } from "@/model/medico-entity.model";
import { Notification } from "@/model/notification";
import { Paciente } from "@/model/paciente-entity.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Secretaria } from "@/model/secretaria-entity.model";
import { StatusAgenda } from "@/model/statusAgenda.enum";
import { Historico } from "@/model/historico-entity.model";
import { HistoricoClient } from "@/client/historico.client";
import { Options, Vue } from "vue-class-component";
export default class AgendaForm extends Vue {
  private agenda = new Agenda();
  private agendaClient = new AgendaClient();
  private historico = new Historico();
  private historicoClient!: HistoricoClient;
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Paciente> = new PageResponse();
  private notification: Notification = new Notification();
  private pacienteList: Paciente[] = [];
  private pacienteClient!: PacienteClient;
  private medicoList: Medico[] = [];
  private medicoClient!: MedicoClient;
  private pageResponse2: PageResponse<Medico> = new PageResponse();
  private secretariaList: Secretaria[] = [];
  private secretariaClient!: SecretariaClient;
  private pageResponse3: PageResponse<Secretaria> = new PageResponse();
  private paciente = new Paciente();
  private medico = new Medico();
  private secretaria = new Secretaria();

  public mounted(): void {
    this.agendaClient = new AgendaClient();
    this.pacienteClient = new PacienteClient();
    this.medicoClient = new MedicoClient();
    this.secretariaClient = new SecretariaClient();
    this.historicoClient = new HistoricoClient();
    this.listarMedico();
    this.listarPaciente();
    this.listarSecretaria();
  }
  private listarPaciente(): void {
    this.pacienteClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.pacienteList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
  private listarMedico(): void {
    this.medicoClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse2 = success;
        this.medicoList = this.pageResponse2.content;
      },
      (error) => console.log(error)
    );
  }
  private listarSecretaria(): void {
    this.secretariaClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse3 = success;
        this.secretariaList = this.pageResponse3.content;
      },
      (error) => console.log(error)
    );
  }
  private onClickCadastrar() {
    this.agenda.medico = this.medico;
    this.agenda.paciente = this.paciente;
    this.agenda.encaixe = false;
    if (this.secretaria.id != undefined) {
      this.agenda.secretaria = this.secretaria;
      this.agenda.status = StatusAgenda.aprovado;
    } else {
      this.agenda.status = StatusAgenda.pendente;
    }

    this.agenda.ativo = true;
    console.log(this.agenda);

    this.agendaClient.cadastrar(this.agenda).then(
      (sucess) => {
        this.notification = this.notification.new(
          true,
          "notification is-sucess",
          "Agendamento feito com sucesso !!"
        );
        this.getLastId(this.agenda);
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
  private onClickCadastrarHistorico(idLast: number, agenda: Agenda) {
    this.historico.ativo = true;
    this.historico.secretaria = agenda.secretaria;
    this.historico.paciente = agenda.paciente;
    this.historico.data = agenda.dataDe;
    this.historico.observacao = "Nulo";
    this.historico.agenda = agenda;
    this.historico.agenda.id = idLast;
    //this.historico.agenda.id = this.getLastId();
    console.log(this.historico);
    this.historicoClient.cadastrar(this.historico).then(
      (sucess) => {
        this.onClickLimpar();
      },
      (error) => {
        this.onClickLimpar();
      }
    );
  }
  private onClickLimpar() {
    this.agenda = new Agenda();
    this.paciente = new Paciente();
    this.medico = new Medico();
    this.secretaria = new Secretaria();
    this.historico = new Historico();
  }
  private getLastId(agenda1: Agenda) {
    this.agendaClient.getLastId().then(
      (sucess) => {
        this.onClickCadastrarHistorico(sucess, agenda1);
      },
      (error) => {
        console.log("Erro");
      }
    );
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
.btn_Cad {
  width: 50%;
}
</style>
