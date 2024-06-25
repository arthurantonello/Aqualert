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
      :min="0"
      :max="consumption"
    />
    </div>

    <div class="row items-center q-pa-md">
      <q-btn
        round
        dense
        flat
        icon="remove"
        @click="decreaseValue"
      />
      <span class="q-mx-md">{{ value }} ml</span>
      <q-btn
        round
        dense
        flat
        icon="add"
        @click="increaseValue"
      />
    </div>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  data() {
    const $store = useStore();
    const consumption = computed( {
      get: () => $store.getters["user/getConsumption"]
    });
    return {
      value: 0, // Valor inicial
      consumption,
    };
  },
  watch: {
    value(newValue) {
      // Observa a variável value, quando ela muda o novo valor fica salvo em storedValue
      localStorage.setItem('storedValue', newValue);
    },
  },
  mounted() {
    // Carrega o valor do local storage quando o componente é montado
    const storedValue = localStorage.getItem('storedValue');
    if (storedValue !== null) {
      this.value = parseInt(storedValue, 10);
    }
  },
  methods: {
    increaseValue() {
      this.value += Math.min(100, this.consumption);
    },
    decreaseValue() {
      if (this.value > 0) {
        this.value -= Math.min(100, this.consumption);
      }
    },
  },
};
</script>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
