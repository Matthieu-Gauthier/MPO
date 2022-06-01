<template>
   <div id="app">
      <Particles id="tsparticles"
                 :particles-init="particlesInit"
                 :options="particulesConfig" />
      <app-bar />
      <div id="main">
         <router-view />
      </div>
   </div>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
import particulesConfig from '@/assets/particles.js';
import { loadFull } from 'tsparticles';

const particlesInit = async (engine) => {
   await loadFull(engine);
};
</script>

<style scoped>
#tsparticles {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #000000;
   z-index: -10;
}
#main {
   position: absolute;
   left: 0;
   right: 0;
   top: 8em;
   bottom: 5em;
}
</style>
