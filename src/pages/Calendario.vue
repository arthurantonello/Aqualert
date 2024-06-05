<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
    <q-date
    v-model="days"
    title="John Doe"
    subtitle="Birthday"
    range multiple
    readonly/>
  </div>
    <p>São 10  dias seguidos mantendo sua meta de hidratação!</p>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      days: ref([
        { from: '2024/07/01', to: '2024/07/10' },
        { from: '2024/07/21', to: '2024/07/25' }
      ])
    }
  }
}
</script>

<script setup>
defineOptions({
  name: 'IndexPage'
});

</script>
