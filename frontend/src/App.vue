<template>
   <v-app>
      <app-bar />
      <v-main id="main">
         <router-view />
      </v-main>
   </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
import './styles/index.css';
</script>

<style scoped>
#main {
   position: absolute;
   left: 0;
   right: 0;
   top: 8em;
   bottom: 5em;
}
</style>
