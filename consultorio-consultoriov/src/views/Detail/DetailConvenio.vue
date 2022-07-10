<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Detalhes do Convenio</p>
        </div>
      </div>

      <div class="content">
        <i> Nome : {{ convenio.nome }} </i>
        <br /><br />
        <i> Valor : R$ {{ convenio.valor }} </i>
        <br />
        <br />
        <i v-if="convenio.ativo" style="color: limegreen"> Ativo</i>
        <i v-if="!convenio.ativo" style="color: red"> Inativo</i>
        <br /><br />
        <i>Cadastrado em : {{ convenio.cadastro }}</i>

        <br /><br />
        <div class="columns">
          <div class="column">
            <button
              class="button is-info"
              @click="onClickPaginaEditar(convenio.id)"
            >
              Editar
            </button>
          </div>
          <div class="column">
            <button
              @click="desativarConvenio(convenio)"
              class="button is-danger"
            >
              Desativar
            </button>
          </div>
          <div class="column">
            <router-link to="/convenio"
              ><input class="button is-link" type="submit" value="Voltar"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Especialidade } from "@/model/especialidade.entity.model";
import { EspecialidadeClient } from "@/client/especialdiade.client";
import { Prop } from "vue-property-decorator";
import { Convenio } from "@/model/convenio-entity.model";
import { ConvenioClient } from "@/client/convenio.client";
export default class DetailConvenio extends Vue {
  private convenioClient!: ConvenioClient;
  private convenio: Convenio = new Convenio();
  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;

  public mounted(): void {
    this.convenioClient = new ConvenioClient();
    this.getConvenio();
  }
  private getConvenio(): void {
    this.convenioClient.findById(this.id).then(
      (sucess) => {
        this.convenio.id = sucess.id;
        this.convenio.nome = sucess.nome;
        this.convenio.valor = sucess.valor;
        this.convenio.ativo = sucess.ativo;
        this.convenio.cadastro = sucess.cadastro;
        this.convenio.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }
  private onClickPaginaEditar(idConvenio: number) {
    this.$router.push({
      name: "convenio-editar",
      params: { id: idConvenio, model: "editar" },
    });
  }
  private desativarConvenio(convenioDesativar: Convenio) {
    convenioDesativar.id = this.convenio.id;
    convenioDesativar.nome = this.convenio.nome;
    convenioDesativar.ativo = false;
    convenioDesativar.cadastro = this.convenio.cadastro;
    convenioDesativar.atualizado = this.convenio.atualizado;
    this.convenioClient.editar(convenioDesativar);
    this.$router.push({ name: "convenio" });
  }
}
</script>

<style></style>
