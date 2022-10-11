<script setup>
    import MangaChap from '../components/MangaChap.vue';
    import MangaDetails from '../components/MangaDetails.vue';
    import NavBar from '/src/components/NavBar.vue';
    import Footer from '/src/components/Footer.vue';
    </script>
    
    <template>
      <main class="bg-gray-900">
        <NavBar />
        <Carousel />
        <MangaDetails />
        <MangaChap />
        <Footer />
      </main>
    </template>
    