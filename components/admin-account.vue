<script setup>
import { onClickOutside } from '@vueuse/core'
import { useSettings, useUser } from '../store'

const router = useRouter()
const settingsStore = useSettings()
const userStore = useUser()

const show = ref(false)
const el = ref(null)

function logout() {
    userStore.logout()
    setTimeout(() => {
        router.push('/admin/login')
    }, 100)
}

onClickOutside(el, (event) => show.value = false)

</script>

<template>
    <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
        <!-- Profile dropdown -->
        <div ref="el" class="relative flex-shrink-0">
            <div>
                <button @click.prevent="show = !show" type="button"
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-semeiosis-default"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <div class="bg-gray-400 h-8 w-8 rounded-full flex justify-center items-center">
                        <AppIcon name="IconUser" type="outline" className="h-5 w-5 text-white" />
                    </div>
                </button>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <div v-if="show"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
                >
                    <button @click.prevent="logout()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                        tabindex="-1" id="user-menu-item-1">Logout</button>
                </div>
            </transition>
        </div>
    </div>
</template>
