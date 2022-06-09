<template>
   <v-container v-if="value">
      <div class="text-body-5">
         {{ title }}:
      </div>
      <div class="text-body-4 ml-4">
         {{ value }}
      </div>
   </v-container>
</template>

<script setup>
defineProps({
   title: { type: String },
   value: { type: String },
});
</script>
