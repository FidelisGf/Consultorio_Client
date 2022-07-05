<template>
   <div class="Especialidade">
    <div class="columns">
         <div class="column">
            <h1 class="title is-1">Especialidades</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <router-link to="/especialidade/cadastrar"><button class="button is-primary is-rounded">Cadastrar Especialidade</button></router-link>
        </div>
    </div>
    <div class="columns">
         <div class="column">
            <button class="button is-link is-rounded">Buscar Especialidade</button>
        </div>
    </div>
     <div class="columns">
         <div class="column">
             <EspecialidadeTable/>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EspecialidaeForm from '@/components/Forms/EspecialidadeForm.vue'; // @ is an alias to /src
import EspecialidadeTable from '@/components/Tables/EspecialidadeTable.vue';

@Options({
  components: {
    EspecialidadeTable,
  },
})
export default class EspecialidadeView extends Vue {}
</script>
<style lang="scss">
</style>
