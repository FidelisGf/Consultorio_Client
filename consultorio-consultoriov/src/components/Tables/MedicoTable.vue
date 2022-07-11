<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Info</th>
        <th>Nome</th>
        <th>Cpf</th>
        <th>CRM</th>
        <th>Login</th>
        <th>Ativo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-text-left" v-for="item in medicoList" :key="item.id">
        <th>
          <button
            class="button is-info is-rounded"
            @click="onClickPaginaDetalhar(item.id)"
          >
            Info
          </button>
        </th>
        <th>{{ item.nome }}</th>
        <th>{{ item.cpf }}</th>
        <th>{{ item.crm }}</th>
        <th>{{ item.login }}</th>
        <th span v-if="item.ativo" class="tag is-link">Ativo</th>
        <th span v-if="!item.ativo" class="tag is-danger">Inativo</th>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Medico } from "@/model/medico-entity.model";
import { MedicoClient } from "@/client/medico.client";
export default class MedicoTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Medico> = new PageResponse();
  private medicoList: Medico[] = [];
  private medicoClient!: MedicoClient;

  public mounted(): void {
    this.medicoClient = new MedicoClient();
    this.listarMedico();
  }
  private listarMedico(): void {
    this.medicoClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.medicoList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaDetalhar(idMedico: number) {
    this.$router.push({
      name: "medico-detalhar",
      params: { id: idMedico, model: "detalhar" },
    });
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
