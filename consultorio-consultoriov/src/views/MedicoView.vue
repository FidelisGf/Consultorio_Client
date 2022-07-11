<template>
  <div class="columns">
    <div class="column is-12 is-size-3">Lista de Medicos</div>
  </div>
  <div class="columns">
    <div class="column">
      <router-link to="/medico/cadastrar"
        ><button class="button is-primary is-rounded">
          Cadastrar Medico
        </button></router-link
      >
    </div>
  </div>
  <MedicoTable />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MedicoTable from "@/components/Tables/MedicoTable.vue";

@Options({
  components: {
    MedicoTable,
  },
})
export default class MedicoView extends Vue {}
</script>
<style lang="scss"></style>
