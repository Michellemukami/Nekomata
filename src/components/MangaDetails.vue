<template>
<div>
    <main class="bg-gray-300">
        <section class="relative block" style="height: 500px;">
            <div class="absolute top-0 w-full h-3/4 md:h-full bg-center bg-no-repeat bg-cover" style='background-image: url("/src/assets/onep.jpg");'>
                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
        </section>

        <section class="relative py-0.5 bg-gray-900">
            <div class="container mx-auto">

                <div class="flex flex-wrap break-words pt-20 w-5/6 h-1/3 mx-auto justify-center">

                    <div class="card relative flex flex-col min-w-0 break-words bg-gray-100 w-5/6 h-1/3 p-10 shadow-xl rounded-lg">
                        <div class="px-6">

                            <div class="mx-auto lg:w-full flex flex-wrap">
                                <div class="lg:w-1/4 w-full">
                                    <div class="md:p-0 object-cover object-center">

                                        <img class="w-64 md:h-96 h-80 rounded" src="/src/assets/onepiece.jpg" alt="">

                                    </div>
                                </div>
                                <div class="lg:w-3/4 pl-10 w-full lg:py-6 mt-6 lg:mt-0">
                                    <div class="flex justify-between">
                                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">ONE PIECE</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-red-600 hover:fill-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <div class="flex pb-1">
                                            <p class="text-gray-900 text-base">Genre:</p>
                                            <p class="text-red-700 pl-32 text-base">Fantasy</p>
                                        </div>
                                        <div class="flex pb-1">
                                            <p class="text-gray-900 text-base">Artist:</p>
                                            <p class="text-red-700 pl-32 text-base">Oda Eiichiro</p>
                                        </div>
                                        <div class="flex pb-1">
                                            <p class="text-gray-900 text-base">Last Update:</p>
                                            <p class="text-red-700 pl-20 text-base">Vol. 20 chap 9</p>
                                        </div>

                                    </div>
                                    <div class="flex pb-2">
                                        <p class="pr-28">Ratings:</p>
                                        <span class="flex items-center">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-700" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-700" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-700" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-700" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-700" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                                </path>
                                            </svg>
                                            <span class="text-red-700 ml-3">(4.5)</span>
                                        </span>
                                    </div>
                                    <p class="leading-relaxed pt-4">The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates... <a class="text-red-600 text-md">(Read more)</a></p>
                                    
                                    <div class="border-t-2 border-gray-200 mt-5">
                                        <div class="flex mt-5">
                                            <RouterLink to="/mangareader">
                                                <button class="flex mr-auto text-white bg-red-700 border-0 py-2 px-6 rounded">
                                                    Start Reading Vol. 1</button>
                                            </RouterLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</div>
</template>
<style>
.card{
   margin-top: -525px;
}
</style>
