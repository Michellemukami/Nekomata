<template>
<div class="container my-10 mx-auto md:px-12">
    <div class="flex justify-between">
        <div>
            <div class="pb-0 pl-8">
                <div class="flex justify-between flex-row">
                    <div>
                        <h1 class="text-3xl body-font font-oswald font-semibold text-gray-50">Latest Manga Updates</h1>
                    </div>
                
                    <div class="flex pr-8 pt-5">
                        <div class="pr-3">
                            <div class="rounded-full bg-gray-600 cursor-pointer p-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                        <div class="rounded-full bg-gray-600 cursor-pointer p-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>

                </div>

            </div>
            <div class="flex flex-row p-7 pl-8">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7">
                    <div v-for="manga in mangas" :key="manga.id">
                        <div class="relative overflow-hidden bg-no-repeat bg-cover transform transition duration-500 hover:scale-105">
                            <RouterLink to="/mangadetails" href="#" class="group">
                                <img alt="Placeholder" class="block h-48 w-36 rounded-sm" :src="manga.image">
                                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out bg-gray-800 rounded-sm"></div>
                                <div class="absolute top-20 left-12 overflow-hidden bg-fixed opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-100">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>

                                </div>
                            </RouterLink>
                        </div>
                        <p class="text-gray-50 text-sm pt-2">{{manga.title}}</p>
                        <div class="flex">
                            <p class="text-gray-100 text-xs">CH.</p><p class="text-gray-100 text-xs pl-1">{{manga.chapter}}</p>
                        </div>
                        <div class="flex">
                            <p class="text-gray-500 text-xs">Update</p><p class="text-gray-500 text-xs pl-1">{{manga.updatedAt}}</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="pr-8 hidden md:block">
            <div class="pb-6">
                <h1 class="text-3xl body-font font-oswald font-semibold text-gray-50">Top Mangas</h1>
            </div>
            <div class="grid grid-cols-1 gap-5">

                <div class="max-w-sm w-full lg:max-w-full lg:flex">

                    <div class="h-48 lg:h-auto lg:w-24 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/onepiece.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover rounded-lg shadow md:px-6 md:py-8 w-full antialiased" style="
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

                    <div class="h-48 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center bg-no-repeat" style="background-image: url('/src/assets/kaisen.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover rounded-lg shadow md:px-6 md:py-8 w-full antialiased" style="
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
                <div class="max-w-sm w-full lg:max-w-full lg:flex">

                    <div class="h-48 lg:h-auto lg:w-24 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/ainz.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover p-4 rounded-lg shadow md:px-6 md:py-8 w-full antialiased" style="
                        background-image: url('/src/assets/ainz.jpg');
                        background-repeat: no-repat;
                        background-size: cover;
                        background-blend-mode: multiply;">
                        <div>
                            <div class="mb-8 flex justify-between">
                                <p class="text-md text-gray-50 flex items-center">
                                    Overlord
                                </p>
                                <p class="text-md text-gray-50 flex items-center">03</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">

                    <div class="h-48 lg:h-auto lg:w-24 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/balls.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover p-4 rounded-lg shadow md:px-6 md:py-8 w-full antialiased" style="
                        background-image: url('/src/assets/balls.jpg');
                        background-repeat: no-repat;
                        background-size: cover;
                        background-blend-mode: multiply;">
                        <div>
                            <div class="mb-8 flex justify-between">
                                <p class="text-md text-gray-50 flex items-center">
                                    Dragon Ball
                                </p>
                                <p class="text-md text-gray-50 flex items-center">04</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">

                    <div class="h-48 lg:h-auto lg:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center bg-no-repeat" style="background-image: url('/src/assets/bebop.jpg')">
                    </div>
                    <div class="h-20 border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-800 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-center bg-no-repeat bg-cover rounded-lg shadow md:px-6 md:py-8 w-full antialiased" style="
                        background-image: url('/src/assets/bebop.jpg');
                        background-repeat: no-repat;
                        background-size: cover;
                        background-blend-mode: multiply;">
                        <div>
                            <div class="mb-8 flex justify-between">
                                <p class="text-md text-gray-50 flex items-center">
                                    Cowboy Bebop
                                </p>
                                <p class="text-md text-gray-50 flex items-center">05</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!-- <div id="demo">
        <div v-show="active">Show</div>
        <div @mouseover="mouseOver">Hover over me!</div>
    </div> -->
</div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            active: false,
            mangas: [{
                    id: 1,
                    title: 'One piece',
                    author: 'oda eichiro',
                    image: '/src/assets/onepiece.jpg',
                    chapter: '689',
                    updatedAt: 'Just now'
                },
                {
                    id: 2,
                    title: 'Fate Zero',
                    author: 'Roda',
                    image: '/src/assets/fate.jpeg',
                    chapter: '80',
                    updatedAt: 'Yesterday'
                },
                {
                    id: 3,
                    title: 'Bleach',
                    author: 'Jane Doe',
                    image: '/src/assets/ichi.jpg',
                    chapter: '309',
                    updatedAt: '2 hours ago'
                },
                {
                    id: 4,
                    title: 'Jojo',
                    author: 'Jane Doe',
                    image: '/src/assets/jojo.png',
                    chapter: '200',
                    updatedAt: '30 minutes ago'
                },
                {
                    id: 5,
                    title: 'Demon slayer',
                    author: 'Jane Doe',
                    image: '/src/assets/tanjiro.jpg',
                    chapter: '169',
                    updatedAt: '1 day ago'
                },
                {
                    id: 6,
                    title: 'Jujutsu kaisen',
                    author: 'Jane Doe',
                    image: '/src/assets/kaisen.jpg',
                    chapter: '99',
                    updatedAt: '2 weeks ago'
                },
                {
                    id: 7,
                    title: 'Howls Moving Castle',
                    author: 'Jane Doe',
                    image: '/src/assets/howl.png',
                    chapter: '68',
                    updatedAt: '5 days ago'
                },
                {
                    id: 8,
                    title: 'Tokyo Ghoul',
                    author: 'Jane Doe',
                    image: '/src/assets/tokyo.jpg',
                    chapter: '189',
                    updatedAt: '3 days ago'
                },
                {
                    id: 9,
                    title: 'Pokemon',
                    author: 'Jane Doe',
                    image: '/src/assets/pikachu.jpg',
                    chapter: '559',
                    updatedAt: '7 days ago'
                },
                {
                    id: 10,
                    title: 'Overlord',
                    author: 'Jane Doe',
                    image: '/src/assets/ainz.jpg',
                    chapter: '469',
                    updatedAt: '10 minutes ago'
                },
                {
                    id: 11,
                    title: 'Cowboy Bebop',
                    author: 'Jane Doe',
                    image: '/src/assets/bebop.jpg',
                    chapter: '66',
                    updatedAt: '20 minutes ago'
                },
                {
                    id: 12,
                    title: 'Dragon Ball',
                    author: 'Jane Doe',
                    image: '/src/assets/balls.jpg',
                    chapter: '99',
                    updatedAt: '4 hours ago'
                },
            ]

        }
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        }
    }

};
</script>
