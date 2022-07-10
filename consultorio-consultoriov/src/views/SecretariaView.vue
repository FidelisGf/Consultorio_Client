<template>
  <div class="columns">
    <div class="column is-12 is-size-3">Lista de Secretárias</div>
  </div>
  <div class="columns">
    <div class="column">
      <router-link to="/secretaria/cadastrar"
        ><button class="button is-primary is-rounded">
          Cadastrar Secretária
        </button></router-link
      >
    </div>
  </div>
  <SecretariaTable />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SecretariaTable from "@/components/Tables/SecretariaTable.vue";

@Options({
  components: {
    SecretariaTable,
  },
})
export default class SecretariaView extends Vue {}
</script>
<style lang="scss"></style>
