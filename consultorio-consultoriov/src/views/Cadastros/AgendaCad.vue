<template>
  <AgendaForm />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AgendaForm from "@/components/Forms/AgendaForm.vue";
@Options({
  components: {
    AgendaForm,
  },
})
export default class AgendaCad extends Vue {}
</script>
<style lang="scss"></style>
