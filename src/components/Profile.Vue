<template>

<section class="pt-3">
<div class="flex flex-wrap pl-8 w-full">
  <div class="w-40 lg:w-1/4 px-4">
    <div class="flex justify-center pt-8">
      <img alt="..." src="/src/assets/bleach1.png" class="h-56 w-56">
    </div>
    <div class="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-6 shadow-xl rounded-lg mt-5">
      <div class="px-6">
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
              <p>Joined date</p><p>12/7/2000</p>
            
          </div>
          <div class="flex justify-between mb-2 text-gray-100 mt-5">
              <p>Library</p><p>5</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-3/4 max-w-xs pt-16 pb-10">
  <form class="bg-gray-800 w-auto shadow-md pt-10 rounded px-8 pb-8 mb-4">
    <h1 class="text-gray-50 text-lg font-semibold pb-2">Account Details</h1>
        <div class="mb-6 flex justify-between">
      <label class="block pr-10 text-gray-50 text-sm font-bold mb-2" for="password">
        Display Name
      </label>
      <input class="shadow shadow bg-gray-800 appearance-none border pl-5 border-red rounded w-full text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Archmage">

    </div>
    <div class="mb-4 flex justify-between">
      <label class="block text-gray-50 pr-10 text-sm font-bold mb-2" for="username">
        Joined Date
      </label>
      <input class="shadow h-10 bg-gray-800 appearance-none border rounded w-full text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="12/7/2000">
    </div>
    <div class="mb-6 flex justify-between">
      <label class="block pr-10 text-gray-50 text-sm font-bold mb-2" for="password">
        Email Address
      </label>
      <input class="shadow h-10 bg-gray-800  appearance-none border pl-5 border-red rounded w-full text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="mitchellemukami.g@gmail.com">

    </div>
    <div class="mb-4 flex justify-between">
      <label class="block text-gray-50 pr-10 text-sm font-bold mb-2" for="username">
        Current Password
      </label>
      <input class="shadow h-10 bg-gray-800  appearance-none border rounded w-full text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="****************">
    </div>
    <div class="mb-4 flex justify-between">
      <label class="block text-gray-50 pr-10 text-sm font-bold mb-2" for="username">
        Confirm Password
      </label>
      <input class="shadow h-10 bg-gray-800 appearance-none border rounded w-full text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="****************">
    </div>
    <div class="flex justify-center pt-3">
      <button class="text-gray-50 p-3 bg-red-600 rounded-sm">Update</button>
    </div>

  </form>
</div>
</div>
</section>

</template>
