<script setup>
import { useSettings } from '../store'
const route = useRoute()

const settings = useSettings()
const adminMenu = computed(() => settings.adminMenu)
const lang = computed(() => settings.lang)
</script>

<template>
    <div class="h-screen flex">
        <!-- Desktop menu -->
        <div class="w-28 bg-blue-700 overflow-y-auto md:block">
            <div class="w-full py-6 flex flex-col items-center">
                <div class="flex-1 w-full px-2 space-y-1">
                    <nuxt-link v-for="item in adminMenu" :key="item.path" :to="item.path"
                        class="group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium text-center"
                        :class="route.path.includes(item.path)
                            ? 'bg-blue-800 text-white'
                            : 'text-white opacity-70 hover:bg-blue-800 hover:text-white'
                        ">
                        <AppIcon :name="item.icon" type="outline"
                            className="text-blue-300 group-hover:text-white h-6 w-6" />

                        <span class="mt-2">{{ item.label[lang] }}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
