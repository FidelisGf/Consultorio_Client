<template>
    <h1 class="title is-1">Cadastro de Convenio</h1>
    <div class="field">
        <div class="control">
            <input class="input nome" type="text" placeholder="Nome">
        </div>
         <div class="control">
            <input class="input valor" type="number" placeholder="Valor">
        </div>
        <div class="control">
            <input class="button is-primary is-link" type="submit" value="Cadastrar Convenio">
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';


export default class ConvenioForm extends Vue {
  
}
</script>
<style lang="scss">
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    .control{
        margin-top: 10px;
    }
    .input{
        width: 50%;
        border-radius: 20px;
    }
    .button{
        border-radius: 20px;
    }
</style>