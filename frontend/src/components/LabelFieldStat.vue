<template>
   <v-row>
      <v-col class="d-flex justify-end">
         <span class="text-body-4 home-color">
            {{ homeValue }}
         </span>
      </v-col>
      <v-col cols="2"
             class="d-flex justify-center">
         <span class="text-body-5 d-flex">
            {{ title }}:
         </span>
      </v-col>
      <v-col>
         <span class="text-body-4 away-color">
            {{ awayValue }}
         </span>
      </v-col>
   </v-row>
</template>

<script setup>
defineProps({
   title: { type: String },
   homeValue: { type: String },
   awayValue: { type: String },
});
</script>
