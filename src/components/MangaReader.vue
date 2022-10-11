<template>
<nav class="bg-gray-100 shadow-xl opacity-100 px-2 sm:px-4">
    <div class="container items-center mx-auto">
        
        <div class="hidden cursor-pointer w-full md:block md:w-auto" id="navbar-default">
            <div class="flex justify-between">

                <div>
                    <ul class="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium md:border-0">
        
                        <div class="relative group">
                            <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 text-gray-900">Home</span>
                            
                        </div>
                        <div class="relative group">
                            <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 text-gray-900">></span>
                            
                        </div>
        
                        <div class="relative group">
                            <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 text-gray-900">Fantasy</span>
                            
                        </div>
                        <div class="relative group">
                            <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 text-gray-900">></span>
                            
                        </div>
                        <div class="relative group">
                            <span href="#" class="font-semibold text-lg body-font font-oswald block py-2 text-gray-900">One piece</span>
                            
                        </div>
        
                        <li>
        
                            <div class="relative inline-block group pl-4">
        
                                <div class="inline-flex border-b-2 border-red-600" ref="dropdown">
                             <select class="border-transparent focus:border-transparent focus:ring-0 block py-2.5 px-9 w-full text-sm text-gray-900 bg-transparent appearance-none border-none outline-none">
                                
                                <option value="Vol 1">Vol 1</option>
                                <option value="Vol 2">Vol 2</option>
                                <option value="Vol 3">Vol 3</option>
                                <option value="Vol 4">Vol 4</option>
                            </select>
                                </div>
                        
                            </div>
                        </li>
                        <li>
        
                        </li>
                    </ul>
                </div>
                <div class="pt-4 pr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-red-600 hover:fill-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                            </svg>
                    <p class="text-sm text-gray-800 body-font font-oswald font-semibold">Save</p>
                </div>
            </div>
        </div>
    </div>
</nav>

<body class="overflow-y-hidden">
    <iframe src="/src/media/OP-Volume1.pdf#toolbar=0&view=fitH" allowtransparency="true"  frameborder="0" class="bg-gray-900 overflow-y-hidden" style="background-color:black;" width="100%" title="One Piece Vol 1" height="900px">
    </iframe>
</body>
</template>

<style>
    body {
    background-color : transparent;
}
</style>
<script>
export default {
    name: "MangaReader",
    data() {
        return {

        };
    },

 

};
</script>
