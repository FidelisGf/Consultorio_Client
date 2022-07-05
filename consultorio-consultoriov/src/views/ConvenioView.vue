<template>
  <div class="Convenio">
    <div class="columns">
         <div class="column">
            <h1 class="title is-1">Convenios</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <router-link to="/convenio/cadastrar"><button class="button is-primary btn">Cadastrar Convenio</button></router-link>
        </div>
    </div>
    <div class="columns">
         <div class="column">
            <button class="button is-link btn">Buscar Convenio</button>
        </div>
    </div>
     <div class="columns">
         <div class="column">
             <ConvenioTable/>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import ConvenioTable from '@/components/Tables/ConvenioTable.vue';

@Options({
  components: {
    ConvenioTable
  },
})
export default class ConvenioView extends Vue {}
</script>
<style lang="scss">
    .btn{
        border-radius: 25px;
        width: 280px;
        height: 50px;
    }
    .a{
        text-decoration: none;
    }
</style>