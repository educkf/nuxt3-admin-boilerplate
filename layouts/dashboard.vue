<script setup>
import { onBeforeMount, ref } from 'vue'
import { useUser } from '../store/user'

const userStore = useUser()
const router = useRouter()

onBeforeMount(() => {
    if (!userStore.token) {
        router.replace({ path: "/admin/login" })
    }
})

</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <slot />
    </div>
</template>
