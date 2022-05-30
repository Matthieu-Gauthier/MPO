<template>
   <v-container>
      <v-btn absolute
             append-icon="ded">
         CLick
      </v-btn>
      <v-btn> {{ a }}</v-btn>
   </v-container>
</template>

<script setup>
import { ref } from 'vue';

const a = 'abg';
const b = ref(2);
defineExpose({
   a,
   b
});
</script>
