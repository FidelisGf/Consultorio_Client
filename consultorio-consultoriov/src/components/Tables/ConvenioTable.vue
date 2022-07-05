<template>
  <table class="table " >
    <thead>
        <tr class="has-text-centered">
            <th>Informações</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Editar</th>
            <th>Excluir</th>
        </tr>
    </thead>
    <tbody>
        <tr class="has-text-left">
            <th><button class="button is-info">Info</button></th>
            <td>UNIMED</td>
            <td>R$ 5000</td>
            <td><button class="button is-primary">Editar</button></td>
            <td><button class="button is-danger">Desativar</button></td>
        </tr>
        <tr class="has-text-left">
            <th><button class="button is-info">Info</button></th>
            <td>INPACA</td>
            <td>R$ 3700</td>
            <td><button class="button is-primary">Editar</button></td>
            <td><button class="button is-danger">Desativar</button></td>
        </tr>
        <tr class="has-text-left">
            <th><button class="button is-info">Info</button></th>
            <td>APACA</td>
            <td>R$ 1000</td>
            <td><button class="button is-primary">Editar</button></td>
            <td><button class="button is-danger">Desativar</button></td>
        </tr>
    </tbody>
  </table>  
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';


export default class ConvenioTable extends Vue {
  
}
</script>


<style lang="scss">
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    .table{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
   
</style>