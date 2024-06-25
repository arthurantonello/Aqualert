<template>
  <q-page class="flex flex-center fundo-degrade">
    <section class="abertura-container">
      <section class="abertura-conteudo">
        <p>Bem vindo ao</p>
        <img
          class="abertura-logo"
          src="../assets/aqualert-logo.png"
          alt="Aqualert"
        />
        <div
          class="login-formulario q-pa-lg"
          style="max-width: 315px; max-height: 370px"
        >
          <!-- Formulário de login -->
          <q-form
            class="q-gutter-auto"
          >
            <!-- Campo de entrada para o nome -->
            <q-input
              size="50px"
              filled
              v-model="name"
              label="Nome"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor, insira seu nome',
                (val) =>
                  (val && val.length > 1) || 'Por favor, digite um nome válido',
              ]"
            />

            <!-- Campo de entrada para o peso -->
            <q-input
              class="login-formulario-idade"
              label="Peso"
              v-model="weight"
              required
              filled
              type="number"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Por favor, digite seu peso',
                (val) =>
                  val >= 20 || 'Por favor, digite um peso válido',
              ]"
            />

            <div>
              <q-btn
                to="/inicio"
                label="Continuar"
                type="submit"
                color="primary"
              />
              <q-btn
                to="/" label="Voltar"
                olor="primary"
                flat class="q-ml-sm" />
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
import { setName, setWeight } from "src/store/user/actions";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    const $store = useStore();
    const name = computed({
      get: () => $store.state.user.name, // Obtém o nome do usuário
      set: (val) => setName($store, val), // Define o nome do usuário usando a ação 'setName'
    });

    const weight = computed({
      get: () => $store.state.user.weight, // Obtém o peso do usuário
      set: (val) => setWeight($store, val), // Define o peso do usuário usando a ação 'setWeight
    });

    return {
      name,
      weight,
    };
  },
};
</script>

<script setup>
defineOptions({
  name: "LoginUsuario",
});
</script>
