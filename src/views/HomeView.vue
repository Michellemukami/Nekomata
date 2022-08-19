<script setup>
import HomePage from '../components/HomePage.vue';
import NavBar from '/src/components/NavBar.vue';
import Carousel from '/src/components/Carousel.vue';
import Footer from '/src/components/Footer.vue';
</script>

<template>
  <main class="bg-gray-900">
    <NavBar />
    <Carousel />
    <HomePage />
    <Footer />
  </main>
</template>
