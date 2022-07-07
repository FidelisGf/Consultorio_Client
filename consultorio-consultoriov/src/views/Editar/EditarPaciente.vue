<template>
    <PacienteForm/>
</template>
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
   import PacienteForm from '@/components/FormEdit/PacienteEdit.vue';
    @Options({
    components: {
        PacienteForm,
    },
    })
    export default class PacienteEditarView extends Vue{}
</script>
<style  lang="scss">

</style>