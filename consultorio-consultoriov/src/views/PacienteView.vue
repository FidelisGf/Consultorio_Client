<template>
  <div class="columns">
    <div class="column is-12 is-size-3">Lista de Pacientes</div>
  </div>

  <div class="columns">
    <div class="column">
      <router-link to="/paciente/cadastrar"
        ><button class="button is-primary is-rounded">
          Cadastrar Paciente
        </button></router-link
      >
    </div>
  </div>
  <PacienteTable />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PacienteTable from "@/components/Tables/PacienteTable.vue";

@Options({
  components: {
    PacienteTable,
  },
})
export default class PacienteView extends Vue {}
</script>
<style lang="scss"></style>
