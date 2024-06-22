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
      <div class="q-pa-md">
        <div class="q-gutter-sm row items-center">
        <p>{{ name }}</p> <!-- Puxar nome do login -->
      </div>
    </div>

    <p>Peso</p>

     <q-input
        filled
        type="number"
        v-model="weight"
        label="Insira seu peso"
        lazy-rules
      />

    <div class="q-pa-md column items-center justify-around">
      <p>Seu consumo ideal é:</p>

      <q-card class="my-card">
        <q-card-section class="bg-primary text-white ">
          {{ consumption }}
        </q-card-section>
      </q-card>

      <p class="q-pt-md">Litros de água por dia</p>

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
      get: () => $store.state.user.name,
      set: (val) => setName($store, val),
    });

    const weight = computed({
      get: () => $store.state.user.weight,
      set: (val) => setWeight($store, val),
    });

    const consumption = computed( {
      get: () => $store.getters["user/getConsumption"]
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