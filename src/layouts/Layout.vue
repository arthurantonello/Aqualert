<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar>
        <img
          class="absolute-center"
          style="padding: 20px"
          width="300px"
          src="../assets/aqualert-logo.png"
          alt="Aqualert"
        />
      </q-toolbar>
    </q-header>

    <!-- Inserir abaixo no q-drawer: v-model="leftDrawerOpen" -->
    <q-drawer :width="250" bordered breakpoint=500>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <q-item clickable exact to="/inicio">
          <q-item-section avatar>
            <q-icon name="homes"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>Início</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable exact to="/perfil">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Perfil</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-show="$q.screen.lt.sm">
      <q-tabs class="text-white">
        <q-route-tab
          name="Inicio"
          icon="home"
          to="/inicio"
          exact />
        <q-route-tab
          name="Perfil"
          icon="person"
          to="/perfil"
          exact />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      //leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
});
</script>
<style>
@media screen and (min-width: 501px) {
  .q-footer {
    display: none;
  }
}
</style>
