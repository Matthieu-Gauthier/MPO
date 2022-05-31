<template>
   <v-container class="home">
      <h1>This is an home page with EventsTest component</h1>
      <events-test />
   </v-container>
</template>

<script>
import EventsTest from '@/components/EventsTest.vue';

export default {
   name: 'HomeView',

   components: {
      EventsTest
   }
};
</script>
