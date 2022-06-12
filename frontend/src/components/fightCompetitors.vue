<template>
   <v-row v-if="awayCompetitor && homeCompetitor">
      <v-col>
         <v-card flat
                 class="cardFighters">
            <v-card-title class="font-weight-bold text-h2">
               <span class="home-color">{{ homeCompetitor.name }}</span>
               <v-spacer />
               <span class="away-color">{{ awayCompetitor.name }}</span>
            </v-card-title>

            <v-card-subtitle>
               <span class="home-color">{{ homeCompetitor.name }}</span>
               <v-spacer />
               <span class="away-color">{{ awayCompetitor.name }}</span>
            </v-card-subtitle>

            <v-card-content>
               <v-row>
                  <v-col>
                     <v-img :src="homeCompetitor.avatar"
                            width="40vh" />
                  </v-col>
                  <v-col>
                     <label-field-stat title="Birth City"
                                       :away-value="awayCompetitor.birth_city"
                                       :home-value="homeCompetitor.birth_city" />
                     <label-field-stat title="Birth Date"
                                       :away-value="awayCompetitor.birth_date"
                                       :home-value="homeCompetitor.birth_date" />
                     <label-field-stat title="City"
                                       :away-value="awayCompetitor.fighting_out_of_city"
                                       :home-value="homeCompetitor.fighting_out_of_city" />
                     <label-field-stat title="Country"
                                       :away-value="awayCompetitor.fighting_out_of_country"
                                       :home-value="homeCompetitor.fighting_out_of_country" />
                     <label-field-stat title="Reach"
                                       :away-value="awayCompetitor.reach"
                                       :home-value="homeCompetitor.reach" />
                     <label-field-stat title="Height"
                                       :away-value="awayCompetitor.height"
                                       :home-value="homeCompetitor.height" />
                     <label-field-stat title="Weight"
                                       :away-value="awayCompetitor.weight"
                                       :home-value="homeCompetitor.weight" />
                  </v-col>
                  <v-col>
                     <v-img :src="awayCompetitor.avatar"
                            cover
                            width="40vh" />
                  </v-col>
               </v-row>
            </v-card-content>
         </v-card>
      </v-col>
   </v-row>
</template>

<script setup>
import { useGet } from 'feathers-pinia';
import { useCompetitors } from '@/services/competitors';
import LabelFieldStat from '@/components/LabelFieldStat.vue';

const props = defineProps({
   homeCompetitorId: { type: String },
   awayCompetitorId: { type: String }
});

const competitors = useCompetitors();
const { item: homeCompetitor } =  useGet({ model: competitors.Model, id: props.homeCompetitorId });
const { item: awayCompetitor } =  useGet({ model: competitors.Model, id: props.awayCompetitorId });

</script>

<style>
.cardFighters {
   padding: 1em;
   background:
      linear-gradient(to left, var(--away-color) 50%, var(--home-color) 50%) top left no-repeat;
   background-size: 100% 1em
}
</style>
