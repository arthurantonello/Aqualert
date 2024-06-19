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
Template pronto com botões funcionando

<template>
  <q-page class="column flex-center">
    <q-knob
      v-model="count"
      :min="min"
      :max="max"
      size="80px"
      show-value
      :thickness="0.13"
      color="primary"
      track-color="dark"
    >
      <q-avatar size="75px">
        <img alt="Quasar logo" src="~assets/quasar-logo-inner.svg" />
      </q-avatar>
    </q-knob>

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 140px"
    />

    <div class="q-mt-xl">
      <q-btn
        color="primary"
        dense
        round
        label="-"
        :disable="count === min"
        @click="count--"
      />

      <span class="q-mx-md text-bold">{{ count }}</span>

      <q-btn
        color="primary"
        dense
        round
        label="+"
        :disable="count === max"
        @click="count++"
      />
    </div>

    <div class="q-mt-md" style="width: 200px">
      <q-slider v-model="count" :min="min" :max="max" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const min = -5;
const max = 5;
</script>

-->
