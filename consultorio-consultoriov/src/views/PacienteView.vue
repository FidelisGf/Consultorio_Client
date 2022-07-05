<template>
   <div class="Paciente">
    <div class="columns">
         <div class="column">
            <h1 class="title is-1">Pacientes</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <router-link to="/paciente/cadastrar"><button class="button is-primary is-rounded">Cadastrar Paciente</button></router-link>
        </div>
    </div>
    <div class="columns">
         <div class="column">
            <button class="button is-link btn">Buscar Paciente</button>
        </div>
    </div>
     <div class="columns">
         <div class="column">
             <PacienteTable/>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PacienteTable from '@/components/Tables/PacienteTable.vue';

@Options({
  components: {
    PacienteTable,
  },
})
export default class PacienteView extends Vue {}
</script>
<style lang="scss">
</style>
