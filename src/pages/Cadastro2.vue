<template class="inicio">
  <q-page class="flex flex-center fundo-degrade-maior">
  <section class="cadastro-container">
    <section class="cadastro-conteudo">

        <img class="cadastro-logo" src="../assets/aqualert-logo.png" alt="Aqualert" />

        <div class="cadastro-barra">
          <div class="barra-circulo-check">
            <q-icon name="check" size="xs"/>
          </div>
          <div class="barra-linha"></div>
          <div class="barra-circulo-check">
            <q-icon name="check" size="xs"/>
          </div>
        </div>

        <div class="cadastro-formulario q-pa-lg" style="max-width: 315px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-sm"
          >

          <p>Estamos quase lá, para finalizar, insira seu peso em KG</p>
            <q-input
              class="cadastro-formulario-peso"
              filled
              v-model="text"
              label="Peso em Kg"
            />

            <p>Agora, qual o seu intervalo de sono?</p>
            <div class="cadastro-horario">
              <div class="cadastro-horario-imput q-sm row">
                <q-input filled v-model="time" mask="time">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time format24h v-model="time">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Fechar" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>

              <p>até</p>

              <div class="cadastro-horario-imput q-sm row">
                <q-input filled v-model="time" mask="time">
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time format24h v-model="time">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Fechar" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>

            <div>
              <q-btn to="/inicio" label="Continuar" type="submit" color="primary"/>
              <q-btn to="/cadastro" label="Voltar" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </section>
  </section>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
