<template>
  <div class="q-pa-md">
    <v-list
       bordered
       separator
       style="max-width: 318px"
    >
      <v-list-item v-for="(event, i) in events" :key="i" v-ripple clickable>
        <v-list-item-subtitle>
          <span>{{ event.text }}</span>
          <span>{{ event.name }}</span>
        </v-list-item-subtitle>
      </v-list-item>
       <v-list-item v-for="(event, i) in events.reverse()" :key="i" v-ripple clickable>
          <v-list-item-subtitle>
             <span>{{ event.text }}</span>
             <span>{{ event.name }}</span>
          </v-list-item-subtitle>
       </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useFind } from 'feathers-pinia';
import { useEvents } from '@/services/events';

export default {
  name: 'EventsTest',
  setup() {
    const eventsStore = useEvents();
    const eventsParams = computed(() => ({ query: {} }));
    const eventsData = useFind({ model: eventsStore.Model, params: eventsParams });
    const events = eventsData.items;
    return { events };
  }
};
</script>
