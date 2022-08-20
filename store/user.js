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
        }
    }
})
