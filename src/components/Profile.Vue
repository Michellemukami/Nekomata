<template>
<section class="pl-20">
    <div class="flex  w-full">
        <div class="pt-14">
            <img alt="..." src="/src/assets/chopper.png" class="h-64 w-64">
            <div class="pt-4">     
                <div class="bg-gray-800 p-5 rounded-sm">
                    <div>
                        <div v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-100 bg-gray-800': openTab !== 1, 'text-white bg-red-600': openTab === 1}" class="shadow-2xl rounded-sm text-gray-100 p-3">Profile</div>
                    </div>
                    <div class="pt-3 pb-3">
                        <div>
                            <div v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-100 bg-gray-800': openTab !== 2, 'text-white bg-red-600': openTab === 2}" class="shadow-2xl rounded-sm text-gray-100 p-3">Library</div>
        
                        </div>
                    </div>
                    
                    <div>
                        <div v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-100 bg-gray-800': openTab !== 3, 'text-white bg-red-600': openTab === 3}" class="shadow-2xl rounded-sm text-gray-100 p-3">Logout</div>
           
                    </div>
                    
                </div>
            </div>
        </div>

        <div class=" lg:w-3/4 pt-16 pb-10 mx-auto">

            <form v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}" class="bg-gray-800 w-128 shadow-md pt-10 rounded px-8 pb-8 mb-4 tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                <h1 class="text-gray-50 text-lg font-semibold pb-2">Account Details</h1>
                <div class="relative flex items-center justify-center pt-20 pb-14">
                    <div class="h-16 w-16 rounded-full relative avatar flex items-end justify-end min-w-max ring-white">
                        <img alt="..." src="/src/assets/howl.png" class="h-40 w-40 rounded-full">
                        <img class="absolute top-0 right-0 h-10 w-10 my-1 border-2 border-white rounded-full cursor-pointer" src="data:image/png;base64,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">
                    </div>

                </div>
                <div class="mb-4 flex justify-between">
                    <label class="block pr-10 text-gray-50 text-sm font-bold mb-2" for="password">
                        Display Name
                    </label>
                    <input class="shadow bg-gray-800 appearance-none border pl-5 border-red rounded w-1/2 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Archmage">

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
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <form class="bg-gray-800 w-128 shadow-md pt-10 rounded px-8 pb-8 mb-4 tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                <h1 class="text-gray-50 text-lg font-semibold pb-2">Library</h1>
                <div class="relative flex items-center justify-center pt-20 pb-14">
                    <div class="h-16 w-16 rounded-full relative avatar flex items-end justify-end min-w-max ring-white">
                        <img alt="..." src="/src/assets/howl.png" class="h-40 w-40 rounded-full">
                        <img class="absolute top-0 right-0 h-10 w-10 my-1 border-2 border-white rounded-full cursor-pointer" src="data:image/png;base64,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">
                    </div>

                </div>
                <div class="mb-4 flex justify-between">
                    <label class="block pr-10 text-gray-50 text-sm font-bold mb-2" for="password">
                        Display Name
                    </label>
                    <input class="shadow bg-gray-800 appearance-none border pl-5 border-red rounded w-1/2 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Archmage">

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
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>

        </div>
    </div>
</section>
</template>
<script>
    export default {
      name: "profile",
      data() {
        return {
          openTab: 1
        }
      },
      methods: {
        toggleTabs: function(tabNumber){
          this.openTab = tabNumber
        }
      }
    }
</script>
    