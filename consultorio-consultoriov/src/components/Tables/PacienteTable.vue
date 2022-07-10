<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Info</th>
        <th>Nome</th>
        <th>Cpf</th>
        <th>Email</th>
        <th>Login</th>
        <th>Ativo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-text-left" v-for="item in pacienteList" :key="item.id">
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
        <th>{{ item.email }}</th>
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
import { Paciente } from "@/model/paciente-entity.model";
import { PacienteClient } from "@/client/paciente.client";
export default class PacienteTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Paciente> = new PageResponse();
  private pacienteList: Paciente[] = [];
  private pacienteClient!: PacienteClient;

  public mounted(): void {
    this.pacienteClient = new PacienteClient();
    this.listarPaciente();
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
  private onClickPaginaDetalhar(idPaciente: number) {
    this.$router.push({
      name: "paciente-detalhar",
      params: { id: idPaciente, model: "detalhar" },
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
