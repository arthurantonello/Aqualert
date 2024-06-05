<template>
  <q-page class="column items-center justify-center">
    <div class="q-pa-md q-gutter-sm">
      <q-avatar
        size="200px"
        font-size="150px"
        color="blue"
        text-color="white"
        icon="person"
      />
    </div>

    <p>Nome Usuário</p>

    <p>Periodo de sono</p>

    <div class="q-pa-md">
      <div class="q-gutter-sm row">
        <p>Das</p>

        <q-input filled v-model="time" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="time">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-sm row">
        <p>Às</p>
        <q-input filled v-model="time" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="time">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

<!--
    <p>Peso</p>
    <q-input outlined v-model="text" label="Outlined" />

    <p>Seu consumo ideal é:</p>
    <q-btn color="primary" label="1,80" />
    <p>Litros de água por dia</p>

    <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
    <p>4 garrafinhas de 500ml</p>

    /*linha divisioria*/

    <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
    <p>6 copos de 300ml</p>

-->

  </q-page>
</template>



<script>
import { ref } from "vue";

export default {
  data() {
    return {
      time: ref("10:56"),
      timeWithSeconds: ref("10:56:00"),
    };
  },
};
</script>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
