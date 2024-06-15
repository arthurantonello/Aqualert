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

//puxar value baseado no input e deixar botoes individuais e com funcao

//const pra resultado da funcao e obter a meta
// funcao pra consumo receber valores e integrar botoes

export default {
  data () {
    return {
      value: ref(100),
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

<!--
Template de submit com form

<template>
  <form @submit.prevent="simulateSubmit" class="q-pa-md">
    <q-input
      filled
      color="teal"
      hint="Type then hit Enter key above"
      v-model="test"
    />

    <div class="row justify-end">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Save"
        class="q-mt-md"
        color="teal"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const test = ref('')
    const submitting = ref(false)

    function simulateSubmit () {
      submitting.value = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        submitting.value = false
      }, 3000)
    }

    return {
      test,
      submitting,
      simulateSubmit
    }
  }
}
</script>
-->
