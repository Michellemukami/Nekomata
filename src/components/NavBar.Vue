<template>
<nav class="bg-red-800 opacity-100 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="" class="flex items-center">
            <img src="/src/assets/cat.png" class="mr-3 h-6 sm:h-9">
            <span class="self-center text-xl body-font font-oswald font-semibold whitespace-nowrap text-gray-50">Nekomata</span>
        </a>
        <div class="cursor-pointer">
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex group items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6 fill-current" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <div class="hidden cursor-pointer w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium md:border-0">

                <div class="relative group">
                    <RouterLink class="font-semibold text-lg body-font font-oswald block py-2 pr-4 pl-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-50 md:dark:hover:text-white dark:hover:bg-gray-700 darktext-white md:dark:hover:bg-transparent" to="/">Home</RouterLink>
                    <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gray-900 transition-all group-hover:w-full"></span>
                </div>
                <div class="relative group">
                    <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 pr-4 pl-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-50 md:dark:hover:text-white dark:hover:bg-gray-700 darktext-white md:dark:hover:bg-transparent">New Releases</span>
                    <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gray-900 transition-all group-hover:w-full"></span>
                </div>
                <div class="relative group">
                    <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 pr-4 pl-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-50 md:dark:hover:text-white dark:hover:bg-gray-700 darktext-white md:dark:hover:bg-transparent">Popular</span>
                    <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gray-900 transition-all group-hover:w-full"></span>
                </div>
                <div class="relative group">
                    <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 pr-4 pl-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-50 md:dark:hover:text-white dark:hover:bg-gray-700 darktext-white md:dark:hover:bg-transparent">Genre</span>
                    <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gray-900 transition-all group-hover:w-full"></span>
                </div>
                <li>
                    <div class="relative inline-block text-left">
                        <div v-on:click="notificationOpen = !notificationOpen" ref="dropdown">
                            <a id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 pt-1 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </a>

                        </div>
                        <div v-if="notificationOpen" class="z-10 origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <div class="flex px-4 py-2 hover:bg-gray-100">
                                    <img class="h-16 w-14 pl-0.5 pr-1 rounded-md" src="/src/assets/onep.jpg">
                                    <div class="pl-1 pt-1">
                                        <p class="text-sm text-gray-900 font-semibold">One Piece</p>
                                        <div class="flex">
                                            <p class="text-sm text-gray-900 font-medium">Latest:</p><a class="text-sm pl-0.5 text-red-800">chapter 500</a>
                                        </div>
                                        <p class="text-xs text-gray-900 font-light">10 hrs ago</p>
                                    </div>
                                </div>
                                <div class="flex px-4 py-2 hover:bg-gray-100">
                                    <img class="h-16 w-14 pl-0.5 pr-1 rounded-md" src="/src/assets/ainz.jpg">
                                    <div class="pl-1 pt-1">
                                        <p class="text-sm text-gray-900 font-semibold">Overlord VI</p>
                                        <div class="flex">
                                            <p class="text-sm text-gray-900 font-medium">Latest:</p><a class="text-sm pl-0.5 text-red-800">chapter 250</a>
                                        </div>
                                        <p class="text-xs text-gray-900 font-light">2 days ago</p>
                                    </div>
                                </div>
                                <div class="flex px-4 py-2 hover:bg-gray-100">
                                    <img class="h-16 w-14 pl-0.5 pr-1 rounded-md" src="/src/assets/jjk.jpg">
                                    <div class="pl-1 pt-1">
                                        <p class="text-sm text-gray-900 font-semibold">Jujutsu Kiasen</p>
                                        <div class="flex">
                                            <p class="text-sm text-gray-900 font-medium">Latest:</p><a class="text-sm pl-0.5 text-red-800">chapter 300</a>
                                        </div>
                                        <p class="text-xs text-gray-900 font-light">2 days ago</p>
                                    </div>
                                </div>
                                <div class="flex px-4 py-2 hover:bg-gray-100">
                                    <img class="h-16 w-14 pl-0.5 pr-1 rounded-md" src="/src/assets/balls.jpg">
                                    <div class="pl-1 pt-1">
                                        <p class="text-sm text-gray-900 font-semibold">Dragon Balls z</p>
                                        <div class="flex">
                                            <p class="text-sm text-gray-900 font-medium">Latest:</p><a class="text-sm pl-0.5 text-red-800">chapter 300</a>
                                        </div>
                                        <p class="text-xs text-gray-900 font-light">3 days ago</p>
                                    </div>
                                </div>

                                <div class="border-t-2 border-gray-200 mt-2 mb-2 ">
                                    <div class="flex justify-center pt-1">
                                    
                                        <p class="text-gray-700">View all (5)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
                <li>
                    <div class="relative inline-block text-left group">

                        <button v-on:click="dropdownOpen = !dropdownOpen" class="inline-flex" ref="dropdown">
                            <a id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="none" viewBox="0 0 64 64" stroke="currentColor" class="h-7 w-7 text-gray-50">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 34.181641 2.0390625 A 1.0001 1.0001 0 0 0 33.361328 2.4824219 L 32.226562 4.1289062 A 1.0001 1.0001 0 1 0 33.873047 5.2636719 L 35.007812 3.6171875 A 1.0001 1.0001 0 0 0 34.181641 2.0390625 z M 38.492188 5.7167969 A 1.0001 1.0001 0 0 0 37.796875 6.0019531 L 36.345703 7.3789062 A 1.0002374 1.0002374 0 0 0 37.722656 8.8300781 L 39.173828 7.453125 A 1.0001 1.0001 0 0 0 38.492188 5.7167969 z M 27.023438 6 A 1.0001 1.0001 0 0 0 26.072266 7.3710938 C 26.072266 7.3710938 27.479128 11.190316 27.849609 17.347656 C 25.601612 15.15004 21.478183 12 15.5 12 C 9.7575758 12 6.4453125 14.167969 6.4453125 14.167969 A 1.0001 1.0001 0 0 0 6.4042969 15.802734 C 11.3868 19.493117 15.066962 23.784191 17.300781 29.498047 C 15.782176 29.146723 14.330626 29 13 29 C 7.8419301 29 3.4655708 31.121422 0.29296875 34.292969 A 1.0001 1.0001 0 0 0 0.75390625 35.96875 C 5.8175947 37.258842 9.2929859 41.370297 10.339844 42.669922 C 7.0094436 44.204702 5.2050781 46.394531 5.2050781 46.394531 A 1.0001 1.0001 0 0 0 6 48 C 8.8179436 48 10.679101 48.907265 11.589844 49.408203 L 9.1425781 53.486328 A 1.0001 1.0001 0 0 0 10.089844 54.996094 L 20.603516 54.041016 C 21.111811 54.42926 21.666047 54.80733 22.265625 55.158203 C 22.994703 56.398227 24.47476 57.895373 26.509766 59.273438 C 28.688641 60.748927 31.478674 62 34.5 62 C 37.539287 62 40.331178 60.749661 42.505859 59.273438 C 44.537169 57.894537 46.010413 56.394844 46.736328 55.158203 C 47.891142 54.482248 48.834209 53.710863 49.65625 53 L 58 53 A 1.0001 1.0001 0 0 0 58.832031 51.445312 L 57.386719 49.277344 L 62.554688 45.832031 A 1.0001 1.0001 0 0 0 62.554688 44.167969 L 57.779297 40.984375 C 61.931197 38.194794 63.832031 35.554688 63.832031 35.554688 A 1.0001 1.0001 0 0 0 63.275391 34.039062 C 63.275391 34.039062 58.824014 32.956171 54.380859 32.423828 C 56.14093 31.599563 57.984397 30.823383 59.533203 29.845703 A 1.0001 1.0001 0 0 0 59 28 L 52.080078 28 C 52.254536 27.818859 52.26638 27.708219 52.472656 27.533203 C 53.284653 26.844263 54.311646 26.228474 55.267578 25.962891 A 1.0001 1.0001 0 0 0 55 24 C 52.416933 24 50.670057 24.320956 49.322266 24.931641 C 48.493508 25.307151 47.866555 25.797498 47.294922 26.318359 C 47.250532 26.242589 47.250282 26.20174 47.201172 26.121094 C 46.79449 25.453279 46.230014 24.676769 45.496094 23.925781 C 44.194893 22.59432 42.23574 21.476334 39.853516 21.205078 C 39.777108 20.894392 39.675459 20.509612 39.513672 20.009766 C 39.156776 18.907126 38.570324 17.394784 37.654297 15.730469 C 35.822242 12.401838 32.653744 8.4475049 27.410156 6.0878906 A 1.0001 1.0001 0 0 0 27.023438 6 z M 28.628906 9.078125 C 32.145795 11.222116 34.480767 14.116022 35.900391 16.695312 C 36.743488 18.227123 37.287568 19.626687 37.611328 20.626953 C 37.773208 21.127086 37.880678 21.527372 37.943359 21.791016 C 37.974279 21.921088 37.994706 22.018198 38.003906 22.068359 C 38.00403 22.069034 38.003786 22.071566 38.003906 22.072266 A 1.0001 1.0001 0 0 0 38.3125 22.726562 C 38.312722 22.726772 38.783451 22.850237 39.033203 22.916016 L 39 23 C 41.166667 23 42.846747 24.076195 44.066406 25.324219 C 44.676236 25.948231 45.158635 26.609221 45.494141 27.160156 C 45.829646 27.711091 46.023864 28.220455 46.029297 28.242188 A 1.0001 1.0001 0 0 0 47.732422 28.679688 C 48.532077 27.818672 49.153479 27.204722 50.148438 26.753906 C 50.295791 26.687136 50.540398 26.651548 50.708984 26.591797 C 50.028338 27.254264 49.356728 27.917467 49.072266 28.628906 A 1.0001 1.0001 0 0 0 50 30 L 54.771484 30 C 53.404205 30.684218 52.192655 31.41887 50.615234 32.076172 A 1.0001 1.0001 0 0 0 51 34 C 54.836697 34 59.29767 35.101581 61.175781 35.589844 C 60.286012 36.623573 58.756314 38.180587 55.486328 40.142578 A 1.0001 1.0001 0 0 0 55.445312 41.832031 L 60.197266 45 L 55.445312 48.167969 A 1.0001 1.0001 0 0 0 55.167969 49.554688 L 56.130859 51 L 51.640625 51 C 53.228107 48.948861 53.971468 46.453342 53.982422 43.945312 C 54.016722 43.5422 53.934942 43.259902 53.802734 42.974609 C 53.66494 42.677251 53.519752 42.316608 52.921875 42.111328 C 52.545599 41.982816 52.223934 41.981289 51.894531 42.015625 C 51.565129 42.049955 51.242582 42.112785 50.882812 42.349609 L 50.914062 42.328125 L 50.535156 42.558594 C 48.961583 43.257054 47.791702 43.701351 46 43.849609 L 46 42.763672 A 1.0001 1.0001 0 0 0 46 42.474609 L 46 36 A 1.0001 1.0001 0 0 0 44.292969 35.292969 C 44.292969 35.292969 41.896808 37.541481 39.509766 39.490234 C 39.754163 37.934354 40 35.853726 40 33 A 1.0001 1.0001 0 0 0 38.470703 32.152344 C 34.398409 34.697528 31.021548 37.778989 29.564453 39.142578 C 29.051435 37.223379 29 35.038794 29 33 A 1.0001 1.0001 0 0 0 27.970703 32 A 1.0001 1.0001 0 0 0 27.400391 32.199219 C 27.400391 32.199219 23 35.466667 23 41 L 23 42.460938 A 1.0001 1.0001 0 0 0 23 42.769531 L 23 45.261719 L 20.994141 44.095703 A 1.0001 1.0001 0 0 0 20.976562 44.083984 A 1.0001 1.0001 0 0 0 20.925781 44.050781 L 18.115234 42.347656 C 17.755467 42.110831 17.434871 42.049958 17.105469 42.015625 C 16.776066 41.981295 16.454401 41.982818 16.078125 42.111328 A 1.0001 1.0001 0 0 0 16.074219 42.111328 C 15.475779 42.317687 15.334701 42.676074 15.197266 42.972656 C 15.065169 43.257718 14.982331 43.538667 15.015625 43.941406 C 15.028426 46.977398 16.104863 49.998521 18.470703 52.226562 L 11.871094 52.826172 L 13.857422 49.513672 A 1.0001 1.0001 0 0 0 13.554688 48.167969 C 13.554688 48.167969 11.340451 46.770555 8.1777344 46.244141 C 9.0943354 45.491227 10.469427 44.582898 12.324219 43.945312 A 1.0001 1.0001 0 0 0 12.810547 42.414062 C 12.810547 42.414062 8.796177 37.028448 2.8691406 34.736328 C 5.569571 32.478457 8.9652022 31 13 31 C 14.920014 31 16.61407 31.02488 18.589844 31.912109 A 1.0001 1.0001 0 0 0 19.953125 30.699219 C 17.880347 24.116219 13.939766 19.291096 8.8457031 15.240234 C 10.011976 14.697836 11.938208 14 15.5 14 C 23.45098 14 28.185547 20.582031 28.185547 20.582031 A 1.0001 1.0001 0 0 0 30 20 C 30 14.593733 29.242601 11.237702 28.628906 9.078125 z M 41.951172 10.181641 A 1.0001 1.0001 0 0 0 41.414062 10.34375 L 39.720703 11.412109 A 1.000281 1.000281 0 1 0 40.789062 13.103516 L 42.480469 12.035156 A 1.0001 1.0001 0 0 0 41.951172 10.181641 z M 44.503906 15.222656 A 1.0001 1.0001 0 0 0 44.142578 15.292969 L 42.275391 16.011719 A 1.0003735 1.0003735 0 0 0 42.994141 17.878906 L 44.861328 17.160156 A 1.0001 1.0001 0 0 0 44.503906 15.222656 z M 37.847656 35.115234 C 37.63226 39.222203 37.050781 41.683594 37.050781 41.683594 A 1.0001 1.0001 0 0 0 38.554688 42.832031 C 40.591552 41.474121 42.564342 39.687602 44 38.330078 L 44 42.033203 C 42.31592 42.939221 39.715773 44.578646 37.425781 46.181641 A 1.0001 1.0001 0 1 0 38.574219 47.818359 C 38.726715 47.711612 38.892585 47.603705 39.048828 47.496094 A 1.5 2 0 0 0 40.5 49 A 1.5 2 0 0 0 42 47 A 1.5 2 0 0 0 41.673828 45.757812 C 42.509496 45.224628 43.31144 44.727765 44 44.324219 L 44 45 A 1.0001 1.0001 0 0 0 45 46 C 45.756945 46 46.41057 45.944481 47.013672 45.857422 C 47.011602 45.90461 47 45.953789 47 46 C 47 47.073631 46.90182 50.890664 45.134766 53.935547 A 1.0001 1.0001 0 0 0 45.111328 53.978516 C 44.772906 54.63404 43.328131 56.296659 41.382812 57.617188 C 39.437494 58.937714 36.980713 60 34.5 60 C 32.041326 60 29.581984 58.938448 27.630859 57.617188 C 25.679735 56.295927 24.224601 54.629211 23.888672 53.978516 L 23.886719 53.978516 A 1.0001 1.0001 0 0 0 23.865234 53.935547 C 22.452004 51.500363 22.116968 48.638259 22.035156 47.013672 L 23.498047 47.865234 A 1.0001 1.0001 0 0 0 25 47 L 25 44.324219 C 25.687937 44.7274 26.48937 45.223231 27.324219 45.755859 A 1.5 2 0 0 0 27 47 A 1.5 2 0 0 0 28.5 49 A 1.5 2 0 0 0 29.951172 47.496094 C 30.107415 47.603705 30.273285 47.711612 30.425781 47.818359 A 1.0001 1.0001 0 1 0 31.574219 46.181641 C 29.284227 44.578646 26.68408 42.939221 25 42.033203 L 25 41 C 25 38.499497 26.02238 36.732777 27.015625 35.494141 C 27.018825 37.432991 27.130957 39.498243 28.105469 41.447266 A 1.0001 1.0001 0 0 0 29.697266 41.716797 C 29.697266 41.716797 33.673941 38.054224 37.847656 35.115234 z M 17.035156 44.105469 L 19.826172 45.728516 C 19.92375 45.820519 19.997895 45.891723 20 45.884766 C 19.99987 45.899555 20 45.915281 20 46 C 20 46.79025 20.06263 49.026674 20.753906 51.509766 C 20.540987 51.32707 20.254097 51.15957 20.054688 50.984375 C 18.005598 49.185196 17.085825 46.7152 17.035156 44.105469 z M 51.960938 44.119141 C 51.90771 46.723507 50.989537 49.188834 48.943359 50.986328 C 48.744642 51.160891 48.458326 51.32766 48.246094 51.509766 C 48.937376 49.026674 49 46.79025 49 46 C 49 45.915281 49.00011 45.899584 49 45.884766 C 49.002163 45.8922 49.080265 45.815266 49.1875 45.714844 L 51.351562 44.402344 C 51.550822 44.309044 51.752296 44.215696 51.960938 44.119141 z M 37.037109 52.988281 A 1.0001 1.0001 0 0 0 36.199219 53.400391 C 36.199219 53.400391 36.1526 53.482411 35.882812 53.648438 C 35.613023 53.814462 35.184524 54 34.5 54 C 33.815476 54 33.386977 53.814462 33.117188 53.648438 C 32.847397 53.482413 32.800781 53.400391 32.800781 53.400391 A 1.0003905 1.0003905 0 1 0 31.199219 54.599609 C 31.199219 54.599609 31.527603 55.017589 32.070312 55.351562 C 32.613023 55.685538 33.434524 56 34.5 56 C 35.565476 56 36.386977 55.685538 36.929688 55.351562 C 37.472397 55.017587 37.800781 54.599609 37.800781 54.599609 A 1.0001 1.0001 0 0 0 37.037109 52.988281 z"></path>
                                </svg>
                            </a>
                            <div class="pt-2 pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        <div v-if="dropdownOpen" class="z-10 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->

                                <RouterLink to="/profile" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Profile</RouterLink>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Bookmaked</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Setting</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Log out</a>

                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            dropdownOpen: false,
            notificationOpen: false
        };
    },

};
</script>
