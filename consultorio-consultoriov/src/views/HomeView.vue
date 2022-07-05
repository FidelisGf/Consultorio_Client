<template>
  <div class="home">
    <div class="side-bar">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style  lang="scss">
    .side-bar{
      height: 50%;
      width: 50%;
    }
    .home{  
      display: flex;
      justify-content: flex-start;
    }
</style>
