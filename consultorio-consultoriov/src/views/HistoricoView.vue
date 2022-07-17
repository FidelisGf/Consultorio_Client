<template>
  <div class="historico">
    <div class="columns">
      <div class="column is-12 is-size-3">Historico</div>
    </div>
    <div class="columns ml-5 mt-5 pt-5 pl-5">
      <div class="columm">
        <HistoricoTable />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import HistoricoTable from "@/components/Tables/HistoricoTable.vue";
@Options({
  components: {
    HistoricoTable,
  },
})
export default class HistoricoView extends Vue {}
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
