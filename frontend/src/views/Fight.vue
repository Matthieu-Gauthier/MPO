<template>
   <div>
      {{ items }}
      <h1>{{ id }}</h1>
   </div>
</template>

<script setup>
import { useFind } from 'feathers-pinia';
import { useFights } from '@/services/fights';
const props = defineProps({
   id: { type: String }
});

const fights = useFights();
const { items } =  useFind({ model: fights.Model, params: { query: { id: props.id } } });
</script>