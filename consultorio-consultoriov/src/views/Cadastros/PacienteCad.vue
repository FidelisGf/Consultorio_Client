<template>
    <PacienteForm/>
</template>
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
   import PacienteForm from '@/components/Forms/PacienteForm.vue';
    @Options({
    components: {
        PacienteForm,
    },
    })
    export default class PacienteCad extends Vue{}
</script>
<style  lang="scss">

</style>