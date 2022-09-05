<script setup>
    import { useUser, useSettings } from '../store'
import AppIcon from './app-icon.vue';

    const userStore = useUser()
    const router = useRouter()
    const route = useRoute()

    const settings = useSettings()
    const adminMenu = computed(() => settings.adminMenu)
    const lang = computed(() => settings.lang)

    console.log(adminMenu)

    // const show = ref(false)

    // const logout = () => {
    //     userStore.logout()
    //     router.push({ path: "/login" })
    // }

    // const lang = computed(() => settings.lang)

</script>

<template>
    <div class="h-screen flex">
        <!-- Desktop menu -->
        <div class="hidden w-28 bg-blue-700 overflow-y-auto md:block">
            <div class="w-full py-6 flex flex-col items-center">
                <div class="flex-1 w-full px-2 space-y-1">

                    <nuxt-link v-for="item in adminMenu" :key="item.path" :to="item.path"
                        class="group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium text-center"
                        :class="route.path.includes(item.path)
                            ? 'bg-blue-800 text-white'
                            : 'text-white opacity-60 hover:bg-blue-800 hover:text-white'
                        ">
                        <AppIcon :name="item.icon" type="outline"
                            className="text-blue-400 group-hover:text-white h-6 w-6" />

                        <span class="mt-2">{{ item.label[lang] }}</span>
                    </nuxt-link>

                </div>
            </div>
        </div>

        <!-- Mobile menu - Off-canvas menu for mobile, show/hide based on off-canvas menu state. - ->
        <div class="hidden md:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-40 flex">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

                <div class="relative max-w-xs w-full bg-semeiosis-default pt-5 pb-4 flex-1 flex flex-col">
                    <div class="absolute top-1 right-0 -mr-14 p-1">
                        <button type="button"
                            class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span class="sr-only">Close sidebar</span>
                        </button>
                    </div>

                    <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                        <nav class="h-full flex flex-col">
                            <div class="space-y-1">

                                <nuxt-link v-for="item in menu" :key="item.path" :to="item.path"
                                    class="opacity-60 hover:bg-semeiosis-dark hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                                    :class="$route.path.includes(item.path)
                                        ? 'text-white'
                                        : 'text-semeiosos-light group-hover:text-white'
                                    ">
                                    <svg class="text-semeiosos-light group-hover:text-white mr-3 h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>{{ item.label[lang] }}</span>
                                </nuxt-link>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <! -- Dummy element to force sidebar to shrink to fit close icon - ->
                </div>
            </div>
        </div> -->
    </div>
</template>
