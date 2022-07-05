<template>
    <ConvenioForm/>
</template>
<script lang="ts">
   import { Options, Vue } from 'vue-class-component';
   import ConvenioForm from '@/components/Forms/ConvenioForm.vue';
    @Options({
    components: {
        ConvenioForm,
    },
    })
    export default class ConvenioCad extends Vue{}
</script>
<style  lang="scss">

</style>