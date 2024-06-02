<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md flex flex-center">
    <q-knob
      show-value
      class="text-light-blue q-ma-md"
      v-model="value"
      size="350px"
      :thickness="0.05"
      color="light-blue" />
    </div>

    <q-btn push color="blue"
    text-color="white">-</q-btn>
    <q-input outlined v-model="text" label="mls consumidos" />
    <q-btn push color="blue"  text-color="white">+</q-btn>

    <p>Você  está quase lá! Falta pouco para chegar em sua meta diária!</p>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      value: ref(81)
    }
  }
}
</script>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
