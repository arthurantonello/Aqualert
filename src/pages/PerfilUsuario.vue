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
        <p>Nome Usuário</p> <!-- Puxar nome do login -->
      </div>
    </div>

    <p>Peso</p>

     <q-input
        filled
        type="number"
        v-model="peso"
        label="Insira seu peso"
        lazy-rules
      />

    <div class="q-pa-md column items-center justify-around">
      <p>Seu consumo ideal é:</p>

      <q-card class="my-card">
        <q-card-section class="bg-primary text-white ">
          {{ consumo }}
        </q-card-section>
      </q-card>

      <p class="q-pt-md">Litros de água por dia</p>

    </div>

  </q-page>
</template>


<script>
import { ref } from "vue";

export default {
  data() {
    return {
      peso: 0, // peso puxar do login
      dastime: ref(""),
      astime: ref("")
    }
  },

  computed: {
    consumo (){
      return this.peso * 25;
    }
  }
};
</script>


<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
