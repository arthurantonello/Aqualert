<template>
  <q-page class="column items-center justify-around">
    <div class="q-pa-md flex flex-center">
    <q-knob
      show-value
      class="text-light-blue q-ma-md"
      v-model="value"
      size="300px"
      :thickness="0.05"
      color="light-blue"
      readonly/>
    </div>

    <q-input bottom-slots v-model="text" label="Consumo em mls" counter maxlength="10" :dense="dense">
        <template v-slot:before>
          <q-icon v-if="text !== ''" name="open" @click="text = ''" class="cursor-pointer" />
          <q-btn round dense flat icon="remove" />
        </template>

        <template v-slot:after>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-btn round dense flat icon="add" />
        </template>
        </q-input>

    <p>Falta pouco para chegar em sua meta diária!</p>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      value: ref(81),
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
