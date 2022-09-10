<script setup>
import { onBeforeMount, ref } from 'vue'
import { useUser, useSettings } from '../store'
import AdminMenu from '../components/admin-menu.vue'

const userStore = useUser()
const settings = useSettings()
const router = useRouter()

const adminMenu = computed(() => settings.adminMenu)

onBeforeMount(async () => {
    if (!userStore.token) {
        router.replace({ path: "/admin/login" })

    } else {
        const data = await $fetch('/api/list/settings', { method: 'GET' })

        if (data?.success) {
            settings.set(data.settings)
        }
    }
})

</script>

<template>
    <div class="h-screen bg-gray-50 flex overflow-hidden">
        <AdminMenu v-if="adminMenu.length > 0" />

        <!-- Content area -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <AdminHeader />

            <div id="main-view" class="flex-1 flex items-stretch overflow-hidden">
                <main class="flex-1 overflow-y-auto">
                    <section aria-labelledby="primary-heading" class="min-w-0  lg:order-last">
                        <slot />
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>
