<template class="inicio">
  <q-page class="flex flex-center fundo-degrade-maior">
  <section class="cadastro-container">
    <section class="cadastro-conteudo">
        <img class="cadastro-logo" src="../assets/aqualert-logo.png" alt="Aqualert" />
       
        <div class="cadastro-formulario q-pa-lg" style="max-width: 315px max-heigth: 370px">
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
              :rules="[ val => val && val.length > 0 || 'Por favor, insira seu nome']"
            />

            <q-input
              class="cadastro-formulario-senha"
              label="Digite sua senha"
              v-model="password"
              filled
              type="password"
            />

            <div>
              <q-btn to="/inicio" label="Continuar" type="submit" color="primary" />
              <q-btn to="/" label="Voltar" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </section>
  </section>
  </q-page>
</template>

<script setup>
  import { ref } from 'vue'
  defineOptions({
    name: 'IndexPage'
  });
</script>
