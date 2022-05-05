<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useEvents } from './stores/events'

export default defineComponent({
  name: 'App',
  setup() {
    const users = useEvents();
    users.find({query: {}})
    return {
      users
    }
  }
})
</script>
