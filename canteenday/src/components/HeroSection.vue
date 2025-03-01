<template>
  <section class="relative h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent fade-up">
      CANTEEN DAY 2025
    </h1>
    <p class="text-lg mt-4 text-gray-400 fade-up delay-100">🍽️ A premium food experience.</p>
    <button @click="scrollToMenu"
      class="mt-6 px-8 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-md hover-pop">
      Explore Menu
    </button>
  </section>
</template>

<script setup>
const scrollToMenu = () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
};
</script>
