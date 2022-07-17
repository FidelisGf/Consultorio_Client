<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Info</th>
        <th>Status</th>
        <th>Paciente</th>
        <th>Medico</th>
        <th>Data</th>
        <th>Ativo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-text-left" v-for="item in historicoList" :key="item.id">
        <th>
          <button
            @click="onClickPaginaDetalhar(item.id)"
            class="button is-small is-link is-rounded"
          >
            Info
          </button>
        </th>
        <td>{{ item.agenda.status }}</td>
        <td>
          {{ item.paciente.nome }}
        </td>
        <td>
          {{ item.agenda.medico.nome }}
        </td>
        <td>{{ item.data }}</td>
        <th span v-if="item.ativo" class="tag is-link is-rounded">Ativo</th>
        <th span v-if="!item.ativo" class="tag is-danger is-rounded">
          Inativo
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { HistoricoClient } from "@/client/historico.client";
import { Historico } from "@/model/historico-entity.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Vue } from "vue-class-component";

export default class HistoricoTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Historico> = new PageResponse();
  private historicoList: Historico[] = [];
  private historicoClient!: HistoricoClient;

  public mounted(): void {
    this.historicoClient = new HistoricoClient();
    this.listarHistorico();
  }
  private listarHistorico(): void {
    this.historicoClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.historicoList = this.pageResponse.content;
        console.log(this.historicoList);
      },
      (error) => console.log(error)
    );
  }
}
</script>
<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.table {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
