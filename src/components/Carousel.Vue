<template>
<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner bg-cover bg-no-repeat bg-center relative h-128 w-full overflow-hidden">
    <div class="carousel-item bg-cover bg-no-repeat bg-center active relative float-left w-full">
      <img
        src="/src/assets/naruto.jpg"
        class="block bg-cover bg-no-repeat bg-center w-full"
        alt="..."
      />
     <div class="absolute top-28 left-64 w-96 h-60 bg-white bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg">
      <div class="p-5 pb-2 pt-8">
        <p class="text-gray-900 text-sm font-semibold">Feature Manga</p>
        <h1 class="text-5xl text-gray-900 font-bold body-font font-oswald">NARUTO</h1>
        <p class="text-sm pt-1 font-medium">Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village...</p>
        <div class="pt-4 flex justify-end">
          <button class="p-3 pl-5 pr-5 text-sm text-gray-50 bg-red-700">Read more</button>
        </div>
      </div>
     </div>
     
     
    </div>
    <div class="carousel-item relative float-left w-full bg-cover bg-no-repeat bg-center relative h-128 w-full overflow-hidden">
      <img
        src="/src/assets/gin3.jpg"
        class="block bg-cover bg-no-repeat bg-center w-full"
        alt="..."
      />
      <div class="absolute top-28 left-64 w-96 h-60 bg-white bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg">
      <div class="p-5 pb-2 pt-8">
        <p class="text-gray-900 text-sm font-semibold">Feature Manga</p>
        <h1 class="text-5xl text-gray-900 font-bold body-font font-oswald">GINTAMA</h1>
        <p class="text-sm pt-1 font-medium">Gintama is a story of a handyman named Gintoki, a samurai with no respect for rules set by the invaders, who's ready to take any job to survive...</p>
        <div class="pt-4 flex justify-end">
          <button class="p-3 pl-5 pr-5 text-sm text-gray-50 bg-red-700">Read more</button>
        </div>
      </div>
     </div>
    </div>
    <div class="carousel-item relative float-left w-full bg-cover bg-no-repeat bg-center relative h-128 w-full overflow-hidden">
       <img
        src="/src/assets/ble1.jpg"
        class="block bg-cover bg-no-repeat bg-center w-full"
        alt="..."
      />
      <div class="absolute top-28 left-64 w-96 h-60 bg-white bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg">
      <div class="p-5 pb-2 pt-8">
        <p class="text-gray-900 text-sm font-semibold">Feature Manga</p>
        <h1 class="text-5xl text-gray-900 font-bold body-font font-oswald">BLEACH</h1>
        <p class="text-sm pt-1 font-medium">Bleach follows the adventures of the hotheaded teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper....</p>
        <div class="pt-4 flex justify-end">
          <button class="p-3 pl-5 pr-5 text-sm text-gray-50 bg-red-700">Read more</button>
        </div>
      </div>
     </div>
    </div>
  </div>

</div>
</template>
