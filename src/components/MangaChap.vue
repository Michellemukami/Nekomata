<template>
<div class="flex justify-center mx-auto w-5/6 h-1/3 pb-20">
    <div class="relative flex flex-col min-w-0 break-words w-5/6 h-1/3 bg-gray-100 rounded-md">
        <div class=" border-b-2 border-gray-300 pt-5 pb-5 pl-5 shadow-xl">
            <div class=" flex justify-between">
                <div class="flex pt-2">
                    <p class="pl-2 text-base">Vol.</p>
                    <p class="pl-2 text-base">|</p>
                    <p class="pl-2 text-base">CH.</p>
                    <p class="pl-2 text-base">|</p>
                    <p class="pl-2 text-base">Sidestories</p>
                </div>
                <div class="pr-8">
                    <div class="inline-flex border-b-2 border-red-600 pr-5" ref="dropdown">
                        <select class="border-transparent focus:border-transparent focus:ring-0 block py-2.5 px-9 w-full text-sm text-gray-900 bg-transparent appearance-none border-none outline-none">
    
                            <option value="Vol 1">Latest</option>
                            <option value="Vol 2">Oldest</option>
                            
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="flex justify-between border-b-2 border-gray-200 pt-7 pb-7 pl-20 pr-20 hover:bg-gray-200 cursor-pointer">
                <RouterLink to="/mangareader" href="#" class="text-base">Vol. 26</RouterLink>
                <p class="text-sm">10 weeks ago</p>
            </div>
            <div class="flex justify-between border-b-2 border-gray-200 pt-7 pb-7 pl-20 pr-20 hover:bg-gray-200 cursor-pointer">
                <p class="text-base">Vol 25.</p>
                <p class="text-sm">9 weeks ago</p>
            </div>
        </div>
    </div>
</div>
</template>
