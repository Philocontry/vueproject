<template>
  <section id="menu" class="py-20 bg-gray-900 text-center text-white">
    <h2 class="text-5xl font-bold text-teal-400 fade-up">🍔 Our Menu 🍷</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      <div v-for="item in menu" :key="item.name"
        class="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg transition hover-pop">
        <h3 class="text-2xl font-semibold text-teal-300">{{ item.name }}</h3>
        <p class="text-lg text-gray-300 mt-2">{{ item.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const menu = ref([
  { name: "Wagyu Beef Burger", price: "$12.99" },
  { name: "Truffle Parmesan Fries", price: "$7.99" },
  { name: "Organic Acai Bowl", price: "$5.99" }
]);
</script>
