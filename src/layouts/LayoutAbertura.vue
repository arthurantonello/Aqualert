<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Inserir abaixo no q-drawer: v-model="leftDrawerOpen" -->
    <q-drawer :width="250" bordered breakpoint="500">
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>


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
