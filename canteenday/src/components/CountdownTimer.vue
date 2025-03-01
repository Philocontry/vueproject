<template>
  <div class="py-16 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-center">
    <h2 class="text-4xl font-bold fade-up">⏳ Countdown to Canteen Day!</h2>
    <h1 class="text-6xl md:text-7xl font-extrabold mt-4">{{ timeLeft }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const timeLeft = ref("");

const countdown = () => {
  const eventDate = new Date("March 15, 2025").getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff > 0) {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    timeLeft.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    timeLeft.value = "🎉 It's Canteen Day!";
  }
};

onMounted(() => {
  countdown();
  setInterval(countdown, 1000);
});
</script>
