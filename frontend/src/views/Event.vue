<template>
   <div>
      <v-progress-circular v-if="isPending"
                           indeterminate
                           color="primary" />
      <div v-if="item && !isPending"
           class="q-pa-md">
         <v-list bordered
                 separator
                 style="max-width: 318px">
            <v-list-item clickable>
               <v-list-item-subtitle>
                  <span>{{ item.name }}</span>
               </v-list-item-subtitle>
            </v-list-item>
         </v-list>
      </div>
   </div>
</template>

<script setup>
import { useGet } from 'feathers-pinia';
import { useEvents } from '@/services/events';
const props = defineProps({
   id: { type: String }
});
const events = useEvents();
const { item, isPending } =  useGet({ model: events.Model, id: props.id });
</script>
