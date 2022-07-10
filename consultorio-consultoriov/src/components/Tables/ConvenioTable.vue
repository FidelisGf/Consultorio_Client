<template>
  <table class="table">
    <thead>
      <tr class="has-text-centered">
        <th>Informações</th>
        <th>Nome</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-text-left" v-for="item in convenioList" :key="item.id">
        <th>
          <button
            @click="onClickPaginaDetalhar(item.id)"
            class="button is-small is-link is-rounded"
          >
            Info
          </button>
        </th>
        <td>{{ item.nome }}</td>
        <td>{{ item.valor }}</td>
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
import { Convenio } from "@/model/convenio-entity.model";
import { ConvenioClient } from "@/client/convenio.client";
export default class ConvenioTable extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Convenio> = new PageResponse();
  private convenioList: Convenio[] = [];
  private convenioClient!: ConvenioClient;
  public mounted(): void {
    this.convenioClient = new ConvenioClient();
    this.listarEspecialidade();
  }
  private listarEspecialidade(): void {
    this.convenioClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.convenioList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaDetalhar(idConvenio: number) {
    this.$router.push({
      name: "convenio-detalhar",
      params: { id: idConvenio, model: "foda" },
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
