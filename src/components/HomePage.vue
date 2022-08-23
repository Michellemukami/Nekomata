<template>
<div class="container my-10 mx-auto md:px-12">
    <div class="flex justify-between">
        <div>
            <div class="pb-0 pl-8 flex justify-between">
                <div>
                    <h1 class="text-3xl body-font font-oswald font-semibold text-gray-50">Latest Manga Updates</h1>
                </div>

            </div>
            <div class="flex flex-row p-7 pl-8">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7">
                    <div v-for="manga in mangas" :key="manga.id">
                        <a href="#">
                            <img alt="Placeholder" class="transform transition duration-500 hover:scale-105 block h-48 w-36 rounded-sm" :src="manga.image">
                            <p class="text-gray-50 text-sm pt-2">{{manga.title}}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="pr-8">
            <div class="pb-6">
                <h1 class="text-3xl body-font font-oswald font-semibold text-gray-50">Top Mangas</h1>
            </div>
            <div class="grid grid-cols-1 gap-5">

                <div class="max-w-sm w-full lg:max-w-full lg:flex">

                    <div class="h-48 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/onepiece.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover p-4 rounded-lg shadow md:px-6 md:py-8 bg-gray-700 w-full antialiased" style="
                        background-image: url('/src/assets/onep.jpg');
                        background-repeat: no-repat;
                        background-size: cover;
                        background-blend-mode: multiply;">
                        <div>
                            <div class="mb-8 flex w-52 justify-between">
                                <p class="text-md text-gray-50 flex items-center">
                                    One Piece
                                </p>
                                <p class="text-md text-gray-50 flex items-center">01</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">

                    <div class="h-48 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/kaisen.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover p-4 rounded-lg shadow md:px-6 md:py-8 bg-gray-700 w-full antialiased" style="
                        background-image: url('/src/assets/jjk.jpg');
                        background-repeat: no-repat;
                        background-size: cover;
                        background-blend-mode: multiply;">
                        <div>
                            <div class="mb-8 flex justify-between">
                                <p class="text-md text-gray-50 flex items-center">
                                    Jujutsu kaisen
                                </p>
                                <p class="text-md text-gray-50 flex items-center">02</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            mangas: [{
                    id: 1,
                    title: 'One piece',
                    author: 'oda eichiro',
                    image: '/src/assets/onepiece.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 2,
                    title: 'Fate Zero',
                    author: 'Roda',
                    image: '/src/assets/fate.jpeg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 3,
                    title: 'Bleach',
                    author: 'Jane Doe',
                    image: '/src/assets/ichi.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 4,
                    title: 'Jojo',
                    author: 'Jane Doe',
                    image: '/src/assets/jojo.png',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 5,
                    title: 'Demon slayer',
                    author: 'Jane Doe',
                    image: '/src/assets/tanjiro.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 6,
                    title: 'Jujutsu kaisen',
                    author: 'Jane Doe',
                    image: '/src/assets/kaisen.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 7,
                    title: 'Howls Moving Castle',
                    author: 'Jane Doe',
                    image: '/src/assets/howl.png',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 8,
                    title: 'Tokyo Ghoul',
                    author: 'Jane Doe',
                    image: '/src/assets/tokyo.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 9,
                    title: 'Pokemon',
                    author: 'Jane Doe',
                    image: '/src/assets/pikachu.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 10,
                    title: 'Overlord',
                    author: 'Jane Doe',
                    image: '/src/assets/ainz.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 11,
                    title: 'Cowboy Bebop',
                    author: 'Jane Doe',
                    image: '/src/assets/bebop.jpg',
                    publishedAt: '2016-04-10'
                },
                {
                    id: 12,
                    title: 'Dragon Ball',
                    author: 'Jane Doe',
                    image: '/src/assets/balls.jpg',
                    publishedAt: '2016-04-10'
                },
            ]

        }
    },
};
</script>
