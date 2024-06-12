<template class="inicio">
  <q-page class="flex flex-center fundo-degrade-maior">
    <section class="cadastro-container">
      <section class="cadastro-conteudo">
        <img
          class="cadastro-logo"
          src="../assets/aqualert-logo.png"
          alt="Aqualert"
        />

        <div class="cadastro-barra">
          <div class="barra-circulo-check">
            <q-icon name="check" size="xs" />
          </div>
          <div class="barra-linha"></div>
          <div class="barra-circulo-uncheck"></div>
        </div>

        <div
          class="cadastro-formulario q-pa-lg"
          style="max-width: 315px max-heigth: 370px"
        >
          <q-form @click="onSubmit" class="q-gutter-auto">
            <q-input
              size="50px"
              filled
              v-model="name"
              label="Nome"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor, insira seu nome',
              ]"
            />

            <q-input
              filled
              clearable
              v-model="surname"
              label="Sobrenome"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor, insira seu sobrenome',
              ]"
            />

            <q-input
              class="cadastro-formulario-senha"
              label="Digite sua senha"
              v-model="password"
              filled
              type="password"
            />

            <q-input
              class="cadastro-formulario-senha"
              label="Confirme sua senha"
              v-model="checkpassword"
              filled
              type="password"
            />

            <div>
              <q-btn
                to="/cadastro2"
                label="Continuar"
                type="submit"
                color="primary"
              />
              <q-btn
                to="/"
                label="Voltar"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </section>
    </section>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  data() {
    const $q = useQuasar();

    const name = ref(null);
    const surname = ref(null);
    const password = ref(null);
    const checkpassword = ref(null);
    const accept = ref(false);

    return {
      name,
      surname,
      password,
      checkpassword,
      accept,

      onSubmit() {
        console.log("ta dos guri");
      },
    };
  },
};
</script>
