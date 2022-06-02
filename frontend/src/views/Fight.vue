<template>
   <div>
      <h1>{{ id }}</h1>
      <competitor v-if="item"
                  :id="item.away_competitor_id" />
   </div>
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