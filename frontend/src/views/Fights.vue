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
            <v-list-item v-for="(fight, i) in items"
                         :key="i" v-ripple
                         :to="/fight/ + fight.id"
                         clickable>
               <v-list-item-subtitle>
                  <span>{{ fight.id }}</span>
               </v-list-item-subtitle>
            </v-list-item>
         </v-list>
      </div>
   </div>
</template>

<script setup>
import { useFind } from 'feathers-pinia';
import { useFights } from '@/services/fights';
const props = defineProps({
   id: { type: String }
});
const fights = useFights();
const { items, isPending } =  useFind({ model: fights.Model, params: { query: { event_id: props.id} } });
</script>
