<template>
   <v-row>
      <v-col>
         <fight-competitors v-if="item"
                            :home-competitor-id="item.home_competitor_id"
                            :away-competitor-id="item.away_competitor_id" />
      </v-col>
   </v-row>
</template>

<script setup>
import { useGet } from 'feathers-pinia';
import { useFights } from '@/services/fights';
import FightCompetitors from '@/components/fightCompetitors.vue';
const props = defineProps({
   id: { type: String }
});

const fights = useFights();
const { item } =  useGet({ model: fights.Model, id: props.id });
</script>
