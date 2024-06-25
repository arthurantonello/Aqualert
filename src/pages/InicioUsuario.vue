<template>
  <q-page class="column items-center justify-around">
    <div class="q-pa-md flex flex-center">
    <!-- Componente q-knob para exibir um knob com o valor do consumo -->
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
      <!-- Botão para diminuir o valor -->
      <q-btn
        round
        color="primary"
        icon="remove"
        @click="decreaseValue"
      />

      <!-- Exibição do valor -->
      <span 
        class="q-mx-md">
        {{ value }} ml
      </span>

      <!-- Botão para aumentar o valor -->
      <q-btn
        round
        color="primary"
        icon="add"
        @click="increaseValue"
      />
    </div>
    <div>Vamos lá, você consegue!</div>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  data() {
    const $store = useStore();

    // Consumo obtido do vuex como valor computado 
    const consumption = computed( {
      get: () => $store.getters["user/getConsumption"]
    });
    return {
      value: 0, // Valor inicial do knob
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
    // Método para aumentar o valor do 'value'
    increaseValue() {
      this.value += Math.min(100, this.consumption);
    },
    // Método para diminuir o valor do 'value'
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
  name: 'InicioUsuario'
});
</script>
