<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Info</th>
        <th>Nome</th>
        <th>Cpf</th>
        <th>PIS</th>
        <th>Login</th>
        <th>Ativo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-text-left" v-for="item in secretariaList" :key="item.id">
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
        <th>{{ item.pis }}</th>
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
import { Secretaria } from "@/model/secretaria-entity.model";
import { SecretariaClient } from "@/client/secretaria.client";
export default class SecretariaTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Secretaria> = new PageResponse();
  private secretariaList: Secretaria[] = [];
  private secretariaClient!: SecretariaClient;

  public mounted(): void {
    this.secretariaClient = new SecretariaClient();
    this.listarSecretaria();
  }
  private listarSecretaria(): void {
    this.secretariaClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.secretariaList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaDetalhar(idSecretaria: number) {
    this.$router.push({
      name: "secretaria-detalhar",
      params: { id: idSecretaria, model: "detalhar" },
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
