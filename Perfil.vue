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
        <p>Nome Usuário</p>
      </div>
    </div>

          <p>Periodo de sono</p>

    <div class="q-pa-md">
      <div class="q-gutter-sm row items-center">
        <p>Das</p>

        <q-input filled v-model="dastime" mask="time" >
          <template v-slot:append >
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="dastime">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="OK" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-sm row items-center">
        <p>Às</p>
        <q-input filled v-model="astime" mask="time">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="astime">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="OK" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
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

//referenciar aqui o primeiro horario (time1 e time2) selecionado pelo usuario em cadastro2
//acionar consumo como rule no q-input ou fuction no script pra calcular baseado no value de peso


export default {
  data() {
    return {
      peso: 0,
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
