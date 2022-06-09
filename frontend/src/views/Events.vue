<template>
   <div>
      <v-progress-circular v-if="isPending"
                           indeterminate
                           color="primary" />
      <div v-if="items && !isPending"
           class="q-pa-md">
         <v-list bordered
                 separator
                 style="max-width: 318px">
            <v-list-item v-for="(event, i) in items"
                         :key="i" v-ripple
                         :to="/fights/ + event.id"
                         clickable>
               <v-list-item-subtitle>
                  <span>{{ event.name }}</span>
               </v-list-item-subtitle>
            </v-list-item>
         </v-list>
      </div>
   </div>
</template>

<script setup>
import { useFind } from 'feathers-pinia';
import { useEvents } from '@/services/events';
const events = useEvents();
const { items, isPending } =  useFind({ model: events.Model, params: { query: {} } });
</script>
