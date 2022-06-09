<template>
   <v-row>
      <v-col>
         {{ item.home_competitor_id }}
         <competitor v-if="item"
                     :id="item.home_competitor_id" />
      </v-col>
      <v-col>
         {{ item.away_competitor_id }}
         <competitor v-if="item"
                     :id="item.away_competitor_id" />
      </v-col>
   </v-row>
</template>

<script setup>
import Competitor from '@/components/Competitor.vue';
import { useGet } from 'feathers-pinia';
import { useFights } from '@/services/fights';
const props = defineProps({
   id: { type: String }
});

const fights = useFights();
const { item } =  useGet({ model: fights.Model, id: props.id });
</script>
