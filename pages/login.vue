<script setup>
import { reactive, ref, onBeforeMount } from 'vue'
import cryptojs from 'crypto-js'

import { useUser } from '../store/user'
import { useNotifications } from '../store/notifications'

const config = useRuntimeConfig()
const notificationStore = useNotifications()
const userStore = useUser()
const router = useRouter()

onBeforeMount(() => {
    if (userStore.token) {
        router.replace({ path: "/" })
    }
})

const loading = ref(false)
const user = reactive({
    username: '',
    password: ''
})

async function handleSubmit() {
    loading.value = true

    try {
        var sha256 = cryptojs.algo.SHA256
            .create()
            .update(user.username)
            .update(user.password)

        const hash = sha256.finalize()

        const body = {
            user: user.username,
            password: hash.toString()
        }

        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body
        })

        if (data?.success) {
            notificationStore.add([{
                title: 'Sucesso!',
                description: 'Login realizado com sucesso.',
                icon: 'success'
            }])
            localStorage.setItem(
                `${config.projectId}-user`,
                JSON.stringify(data)
            )
            router.replace({ path: "/" })

        } else {
            notificationStore.add([{
                title: 'Login não autorizado',
                description: 'Verifique seu usuário e senha, e tente novamente.',
                icon: 'error'
            }])
        }

    } catch (err) {
        console.log({ err })
        notificationStore.add([{
            title: 'Ops!',
            description: 'Aconteceu um erro ao tentar realizar seu login.',
            icon: 'error'
        }])
    }

    loading.value = false
}

useHead({
    title: `Login – ${config.project}`
})

</script>

<template>
    <div class="min-h-screen bg-white flex">
        <div
            class="bg-white relative z-10 flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div class="p-6">
                    <div>
                        <form @submit.prevent="handleSubmit()" class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    e-mail
                                </label>
                                <div class="mt-1">
                                    <input v-model="user.username" id="admin-email" name="admin-email" type="email"
                                        autocomplete="admin-email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                            focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm
                                        " />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-sm font-medium text-gray-700">
                                    senha
                                </label>
                                <div class="mt-1">
                                    <input v-model="user.password" id="admin-password" name="admin-password" type="password"
                                        autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                            focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm
                                        " />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="w-full h-10 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm
                                        text-sm font-medium text-white bg-blue-600 hover:bg-blue-800
                                        transition-color duration-100
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-semeiosis
                                    " :disable="loading">
                                    <span v-if="!loading">logar</span>
                                    <AppLoading v-else />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <img src="/images/bg-login.jpg" class="absolute inset-0 h-full w-full object-cover" provider="static" />
    </div>
</template>
