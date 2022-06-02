<template>
   <div>
      <v-img :src="item.banner"
             large />
      <v-img :src="item.avatar" />
   </div>
</template>

<script setup>
import { useGet } from 'feathers-pinia';
import { useCompetitors } from '@/services/competitors';
const props = defineProps({
   id: { type: String }
});
const competitors = useCompetitors();
const { item } =  useGet({ model: competitors.Model, id: props.id });
</script>
