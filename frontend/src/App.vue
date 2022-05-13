<template>
  <v-app>
     <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
     />
    <v-main class="app">
       <v-btn color="warning"
              to="/">
          Home
       </v-btn>
       <v-btn color="primary"
              to="/about">
          About
       </v-btn>

       <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import appBar from '@/components/AppBar.vue'
</script>
