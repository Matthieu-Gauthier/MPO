<template>
   <v-toolbar absolute
              color="var(--primary-dark-color)"
              class="rounded-pill text-white"
              style="top: 3em;left: 50%; transform: translateX(-50%)">
      <v-btn v-for="link in routes"
             :key="link.name" :to="link.path"
             class="rounded-pill">
         {{ link.name }}
      </v-btn>

      <v-btn icon
             class="ml-16">
         <v-avatar image="https://picsum.photos/40/40"
                   large />
      </v-btn>
   </v-toolbar>
</template>

<script setup>
const routes = [{
   path: '/',
   name: 'home',
},
{
   name: 'login',
   path: '/login',
},
{
   name:'about',
   path:'/about',
},
{
   path: '/fight/sr:sport_event:33785907',
   name: 'fight'
}];
</script>
