<template>
  <div class="Agenda">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Agenda</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <router-link to="/agenda/cadastrar"
          ><button class="button is-primary btn">
            Realizar um Agendamento
          </button></router-link
        >
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <router-link to="/historico"
          ><button class="button is-link btn">Historico</button></router-link
        >
      </div>
    </div>
    <div class="columns pt-5 mt-5">
      <div class="columm">
        <AgendaTable />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import AgendaTable from "@/components/Tables/AgendaTable.vue";
@Options({
  components: {
    AgendaTable,
  },
})
export default class AgendaView extends Vue {}
</script>
<style lang="scss">
.btn {
  border-radius: 25px;
  width: 280px;
  height: 50px;
}
.a {
  text-decoration: none;
}
</style>
