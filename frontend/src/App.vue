<template>
   <v-app>
      <v-app-bar color="teal-darken-4"
                 image="https://picsum.photos/1920/1080?random" />
      <v-main class="app">
         <v-btn color="warning"
                to="/">
            Home
         </v-btn>
         <v-btn color="primary"
                to="/about">
            {{ $t('about') }}
         </v-btn>

         <v-btn color="secondary"
                to="/login">
            Login
         </v-btn>
         <v-btn color="accent">
            accent
         </v-btn>
         <v-btn color="error">
            error
         </v-btn>
         <v-btn color="warning">
            warning
         </v-btn>
         <v-btn color="info">
            info
         </v-btn>
         <v-btn color="success">
            success
         </v-btn>
         <router-view />
      </v-main>
   </v-app>
</template>

<script setup>

</script>
