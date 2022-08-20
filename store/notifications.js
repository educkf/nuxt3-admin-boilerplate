import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useNotifications = defineStore('notifications', {
    state: () => {
        return {
            list: []
        }
    },
    actions: {
        add(notifications) {
            this.list = [
                ...this.list,
                ...notifications.map(item => ({
                    ...item,
                    id: uuid()
                }))
            ]
        },

        remove(notificationId) {
            this.list = this.list.filter(
                item => item.id !== notificationId
            )
        }
    }
})
