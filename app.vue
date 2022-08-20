<script setup>

import { useUser } from './store/user'
const userStore = useUser()

if (process.client) {
    const config = useRuntimeConfig()
    const userRef = localStorage.getItem(`${config.projectId}-user`)

    if (userRef) {
        const user = JSON.parse(userRef)
        userStore.set({
            user: user.user,
            token: user.token
        })
    }
}

</script>

<template>
    <div>
        <AppNotification />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
