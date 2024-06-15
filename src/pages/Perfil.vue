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

    <p>Nome Usuário</p>

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

    <p>Seu consumo ideal é:</p>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        {{ consumo }}
      </q-card-section>
    </q-card>
    </div>

    <p>Litros de água por dia</p>
  </q-page>
</template>


<script>
import { ref } from "vue";
//referenciar aqui o primeiro horario selecionado pelo usuario em cadastro2
//acionar consumo como rule no q-input ou fuction no script pra calcular baseado no value de peso
//:rules="[ val => val && val.length > 0 || 'Please type something']"


export default {
  data() {
    const peso = ref(null)

    return {
      peso,
      consumo: 1,
      dastime: ref(""),
      astime: ref("")

    };
  },
};
</script>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
