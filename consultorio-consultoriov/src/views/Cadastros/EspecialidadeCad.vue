<template>
    <EspecialidadeForm/>
</template>
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
   import EspecialidadeForm from '@/components/Forms/EspecialidadeForm.vue';
    @Options({
    components: {
        EspecialidadeForm,
    },
    })
    export default class EspecialidadeCad extends Vue{}
</script>
<style  lang="scss">

</style>