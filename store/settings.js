import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
    state: () => {
        return {
            lang: 'pt',
            languages: [],
            adminMenu: [],
            settings: {}
        }
    },
    actions: {
        set(payload) {
            payload.forEach(item => {
                console.log({ item })
                this[item._id] = item.itens;
            })
        }
    }
})
