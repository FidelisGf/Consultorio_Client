<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Info</th>
        <th>ID</th>
        <th>Paciente</th>
        <th>Medico</th>
        <th>DataDe</th>
        <th>Ativo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-text-left" v-for="item in agendaList" :key="item.id">
        <th>
          <button
            @click="onClickPaginaDetalhar(item.id)"
            class="button is-small is-link is-rounded"
          >
            Info
          </button>
        </th>
        <td>{{ item.id }}</td>
        <td>
          {{ item.paciente.nome }}
        </td>
        <td>
          {{ item.medico.nome }}
        </td>
        <td>{{ item.dataDe }}</td>
        <th span v-if="item.ativo" class="tag is-link is-rounded">Ativo</th>
        <th span v-if="!item.ativo" class="tag is-danger is-rounded">
          Inativo
        </th>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Agenda } from "@/model/agenda-entity.model";
import { AgendaClient } from "@/client/agenda.client";
export default class AgendaTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Agenda> = new PageResponse();
  private agendaList: Agenda[] = [];
  private agendaClient!: AgendaClient;
  private date!: Date;
  private date2!: Date;
  private n1!: number;
  private n2!: number;
  public mounted(): void {
    this.date = new Date("2022-07-14T18:44:23.688486");
    this.agendaClient = new AgendaClient();
    this.listarAgenda();
  }
  private comparaData(dataDe: Date) {
    this.date2 = dataDe;
    this.n1 = this.date2.getDate();
    this.n2 = this.date.getDate();
    if (this.n1 != this.n2) {
      return false;
    } else {
      return true;
    }
  }
  private listarAgenda(): void {
    this.agendaClient.findByFiltrosPaginadoDia(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.agendaList = this.pageResponse.content;
        console.log(this.agendaList);
      },
      (error) => console.log(error)
    );
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.table {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
