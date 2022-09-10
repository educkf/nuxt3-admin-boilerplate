import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
    state: () => {
        return {
            user: null,
            token: null
        }
    },
    actions: {
        set({ user, token }) {
            this.user = user
            this.token = token
        },

        logout() {
            const config = useRuntimeConfig()
            localStorage.removeItem(`${config.projectId}-user`)
            this.user = null
            this.token = null
        }
    }
})
