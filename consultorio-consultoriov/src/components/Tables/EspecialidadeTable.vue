<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Informações</th>
        <th>Especialidade</th>
        <th>Ativo</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in especialidadeList"
        :key="item.id"
        class="has-text-left"
      >
        <th>
          <button
            @click="onClickPaginaDetalhar(item.id)"
            class="button is-small is-link is-rounded"
          >
            Info
          </button>
        </th>
        <th>{{ item.nome }}</th>
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

import { Especialidade } from "@/model/especialidade.entity.model";
import { EspecialidadeClient } from "@/client/especialdiade.client";

export default class EspecialidadeTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Especialidade> = new PageResponse();
  private especialidadeList: Especialidade[] = [];
  private especialidadeClient!: EspecialidadeClient;
  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient();
    this.listarEspecialidade();
  }
  private listarEspecialidade(): void {
    this.especialidadeClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.especialidadeList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaDetalhar(idEspecialidade: number) {
    this.$router.push({
      name: "especialidade-detalhar",
      params: { id: idEspecialidade, model: "detalhar" },
    });
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
