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
        <div class="abertura-acesso">
          <q-btn
            push
            padding="10px"
            align="around"
            text-color="black"
            color="white"
            clickable
            exact
            to="/login"
            label="Vamos começar"
          />
        </div>
      </section>
      <section class="abertura-ondas">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </section>
      <section class="abertura-box"></section>
    </section>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
