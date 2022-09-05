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
    <div>
        <div v-if="adminMenu.length > 0">
            <AdminMenu />
        </div>

        <div>
            <slot />
        </div>
    </div>
</template>
