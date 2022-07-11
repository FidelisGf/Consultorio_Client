<template>
  <MedicoForm />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MedicoForm from "@/components/Forms/MedicoForm.vue";
@Options({
  components: {
    MedicoForm,
  },
})
export default class MedicoCad extends Vue {}
</script>
<style lang="scss"></style>
