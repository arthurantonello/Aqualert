<template>
  <q-page class="flex flex-center fundo-degrade">
    <section class="abertura-container">
      <section class="abertura-conteudo">
        <p>Bem vindo ao</p>
        <img class="abertura-logo" src="../assets/aqualert-logo.png" alt="Aqualert" />
        <div class="login-formulario q-pa-lg" style="max-width: 315px max-heigth: 370px">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-auto"
          >
            <q-input
              size="50px"
              filled
              v-model="name"
              label="Nome"
              lazy-rules
              :rules="[
               val => val && val.length > 0 || 'Por favor, insira seu nome',
               val => val  && val.length > 1|| 'Por favor, digite um nome válido'
               ]"
            />

            <q-input
              class="login-formulario-idade"
              label="Peso"
              v-model="peso"
              filled
              type="number"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Por favor, digite seu peso',
                val => val >= 20 || 'Por favor, digite um peso válido'
              ]"
            />

            <div>
              <q-btn to="/inicio" label="Continuar" type="submit" color="primary" />
              <q-btn to="/" label="Voltar" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </section>

      <section class="login-ondas">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </section>

      <section class="login-box"></section>
    </section>
  </q-page>
</template>

<script>
  import { ref } from 'vue'

  export default {
    data(){
      const name = ref(null)
      const peso = ref(null)

      return {
        name,
        peso,
      }
    }
  }
</script>
<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
