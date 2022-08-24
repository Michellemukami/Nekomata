<template>
<section class="pl-10">
    <div class="flex  w-full">
        <div class="w-80 px-4 gap-y-0">

            <div class="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-6 shadow-xl rounded-lg mt-16">
                <div class="px-6 pt-20">
                    <div class="flex">
                        <div class="w-full pt-10 px-4 flex justify-center">
                            <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end min-w-max flex ring-white">
                                <img alt="..." src="/src/assets/howl.png" class="h-40 w-40 rounded-full">
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-4 pb-6">
                        <h3 class="text-xl font-semibold leading-normal mb-2 text-gray-50 mb-2">
                            Archmage
                        </h3>
                        <div class="flex justify-between mb-2 text-gray-100 mt-5">
                            <p>Joined date</p>
                            <p>12/7/2000</p>

                        </div>
                        <div class="flex justify-between mb-2 text-gray-100 mt-5">
                            <p>Library</p>
                            <p>5</p>

                        </div>
                    </div>
                    
              <div class="flex pb-11 justify-between">
                          <div class="flex">
  
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pr-1 w-5 h-5 text-gray-50">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                              </svg>
                              <p class="text-gray-50 text-sm">Change password</p>
                          </div>
                          <div class="flex">
  
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pr-1 w-5 h-5 text-gray-50">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                              </svg>
                              <p class="text-gray-50 text-sm">LogOut</p>
                          </div>
  
                      </div>
                </div>
            </div>
       
        </div>
        <div class=" lg:w-3/4 pt-16 pb-10">
            <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 bg-gray-800 w-3/4" id="tabs-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a href="#tabs-home" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">Home</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">Profile</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">Messages</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-contact" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab" aria-controls="tabs-contact" aria-selected="false">Contact</a>
                </li>
            </ul>

            <form class="bg-gray-800 w-128 shadow-md pt-10 rounded px-8 pb-8 mb-4 tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                <h1 class="text-gray-50 text-lg font-semibold pb-2">Account Details</h1>
                <div class="mb-6 flex justify-between">
                    <label class="block pr-10 text-gray-50 text-sm font-bold mb-2" for="password">
                        Display Name
                    </label>
                    <input class="shadow shadow bg-gray-800 appearance-none border pl-5 border-red rounded w-1/2 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Archmage">

                </div>
                <div class="mb-4 flex justify-between">
                    <label class="block text-gray-50 pr-10 text-sm font-bold mb-2" for="username">
                        Joined Date
                    </label>
                    <input class="shadow h-10 bg-gray-800 appearance-none border rounded w-1/2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="12/7/2000">
                </div>
                <div class="mb-6 flex justify-between">
                    <label class="block pr-10 text-gray-50 text-sm font-bold mb-2" for="password">
                        Email Address
                    </label>
                    <input class="shadow h-10 bg-gray-800  appearance-none border pl-5 border-red rounded w-1/2 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="mitchellemukami.g@gmail.com">

                </div>
                <div class="flex justify-center pt-3">
                    <button class="text-gray-50 p-3 bg-red-600 rounded-sm">Update</button>
                </div>

            </form>
            <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <p class="text-gray-50">I am awesome</p>
            </div>
            <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <p class="text-gray-50">I am awesome</p>
            </div>
        </div>
    </div>
</section>
</template>
