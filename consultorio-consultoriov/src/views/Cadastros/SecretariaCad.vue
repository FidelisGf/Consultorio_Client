<template>
  <SecretariaForm />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SecretariaForm from "@/components/Forms/SecretariaForm.vue";
@Options({
  components: {
    SecretariaForm,
  },
})
export default class SecretariaCad extends Vue {}
</script>
<style lang="scss"></style>
