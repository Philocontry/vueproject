<template>
  <div>
      <div class="cursor" ref="cursor"></div>
    <HeroSection />
    <CountdownTimer />
    <MenuSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeroSection from "./components/HeroSection.vue";
import CountdownTimer from "./components/CountdownTimer.vue";
import MenuSection from "./components/MenuSection.vue";
const cursor = ref(null);
onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
</script>
