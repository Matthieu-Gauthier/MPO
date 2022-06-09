<template>
   <v-row>
      <v-col>
         <span> {{ id }}</span>
         <v-card v-if="item"
                 flat
                 class="bg-color-primary-dark">
            <v-card-title class="color-neutral-ground font-weight-bold text-h2">
               {{ item.name }}
            </v-card-title>

            <v-card-subtitle class="color-neutral-ground">
               {{ item.birth_city }}
            </v-card-subtitle>

            <v-card-content class="color-neutral-ground">
               <v-row>
                  <v-col>
                     <v-tooltip>
                        <template #activator="{ props }">
                           <country-flag :country="item.fighting_out_of_country_code"
                                         size="big"
                                         v-bind="props" />
                        </template>
                        <span class="color-neutral-ground">{{ item.fighting_out_of_country }}</span>
                     </v-tooltip>

                     <v-img :src="item.avatar"
                            width="40vh" />
                  </v-col>
                  <v-col>
                     <div v-if="item.record">
                        <v-progress-circular :size="100"
                                             :width="15"
                                             :model-value="percentageFunction(item.record, 'wins')"
                                             color="var(--success-light-color)">
                           <span class="text-h2"> {{ item.record.wins }}</span>
                        </v-progress-circular>

                        <v-progress-circular :size="100"
                                             :width="15"
                                             :model-value="percentageFunction(item.record, 'draws')"
                                             color="var(--info-light-color)">
                           <span class="text-h2"> {{ item.record.draws }}</span>
                        </v-progress-circular>

                        <v-progress-circular :size="100"
                                             :width="15"
                                             :model-value="percentageFunction(item.record, 'losses')"
                                             color="var(--error-light-color)">
                           <span class="text-h2"> {{ item.record.losses }}</span>
                        </v-progress-circular>
                     </div>

                     <label-field-stat title="Birth City"
                                       :value="item.birth_city" />
                     <label-field-stat title="Birth Date"
                                       :value="item.birth_date" />
                     <label-field-stat title="City"
                                       :value="item.fighting_out_of_city" />
                     <label-field-stat title="Country"
                                       :value="item.fighting_out_of_country" />
                     <label-field-stat title="Reach"
                                       :value="item.reach" />
                     <label-field-stat title="Height"
                                       :value="item.height" />
                     <label-field-stat title="Weight"
                                       :value="item.weight" />
                  </v-col>
               </v-row>
            </v-card-content>

            <v-card-actions @click="isExpend = !isExpend">
               <v-btn class="color-neutral-ground"
                      variant="text">
                  More Stats
               </v-btn>

               <v-spacer />

               <v-btn :icon="isExpend ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                      class="color-neutral-ground" />
            </v-card-actions>

            <v-expand-transition>
               <div v-show="isExpend">
                  <v-divider />

                  <v-card-text class="color-neutral-ground">
                     More stats here ...
                     in progress ...
                  </v-card-text>
               </div>
            </v-expand-transition>
         </v-card>
      </v-col>
   </v-row>
</template>

<script setup>
import { useGet } from 'feathers-pinia';
import { useCompetitors } from '@/services/competitors';
import {  ref } from 'vue';
import LabelFieldStat from '@/components/LabelFieldStat.vue';
const props = defineProps({
   id: { type: String }
});
const competitors = useCompetitors();
const isExpend = ref(false);
const { item } =  useGet({ model: competitors.Model, id: props.id });
const percentageFunction = (record, section) => {
   const total = record.wins + record.losses + record.draws;
   return (record[section] / total) * 100;
};
</script>
