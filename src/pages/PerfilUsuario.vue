<template>
  <q-page class="column items-center justify-center">
    <div class="q-pa-md q-gutter-sm">
      <q-avatar
        size="150px"
        font-size="100px"
        color="blue"
        text-color="white"
        icon="person"
      />
    </div>
    <!-- Campo de entrada caso o usuário queira mudar o nome -->
       <q-input
        type="{{ name }}"
        v-model="name"
        :label="name ? '' : 'Nome usuário'"
        lazy-rules
        input-style="text-align: center;"
      />
      <br>
      <!-- Campo de entrada de peso -->
      <q-input
        type="number"
        v-model="weight"
        label="Peso em KG"
        lazy-rules
        input-style="text-align: center;"
      />

    <div class="q-pa-md column items-center justify-around">

      <p>Seu consumo ideal é de</p>
      <!-- Cartão que mostra o consumo ideal do usuário -->
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white ">
          {{ consumption }} ML
        </q-card-section>
      </q-card>

      <p class="q-pt-md">de água por dia</p>

    </div>

  </q-page>
</template>


<script>
import { setName, setWeight } from "src/store/user/actions";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    const $store = useStore();
    const name = computed({
      get: () => $store.state.user.name,  // Obtém o nome do usuário
      set: (val) => setName($store, val), // Define o nome do usuário usando a ação 'setName'
    });

    const weight = computed({
      get: () => $store.state.user.weight,  // Obtém o peso do usuário
      set: (val) => setWeight($store, val), // Define o peso do usuário usando a ação 'setWeight'
    });

    const consumption = computed( {
      get: () => $store.getters["user/getConsumption"] // Obtém o consumo ideal de água
    });

    return {
      name,
      weight,
      consumption,
    };
  },
};
</script>


<script setup>
defineOptions({
  name: 'PerfilUsuario'
});
</script>