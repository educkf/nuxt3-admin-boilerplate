
<script setup>
import { storeToRefs } from 'pinia'
import { useNotifications } from '../store/notifications'

const notifications = useNotifications()
const { list } = storeToRefs(notifications);

function close(id) {
    notifications.remove(id)
}
</script>


<template>
    <div aria-live="assertive"
        class="fixed inset-0 mt-16 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
            <transition-group enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div v-for="notification in list" :key="notification.id"
                    class="max-w-sm w-full bg-gray-700 text-white shadow-lg rounded-lg pointer-events-auto
                            ring-1 ring-black ring-opacity-5 overflow-hidden border-l-8"
                    :class="{
                        'border-green-500': notification.icon === 'success',
                        'border-yellow-500': notification.icon === 'info',
                        'border-red-500': notification.icon === 'error',
                    }"
                >
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <svg v-if="notification.icon === 'success'" class="h-6 w-6 text-green-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg v-if="notification.icon === 'info'" class="h-6 w-6 text-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg v-if="notification.icon === 'error'" class="h-6 w-6 text-red-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-white">
                                    {{ notification.title }}
                                </p>
                                <p class="mt-1 text-sm text-gray-200">
                                    {{ notification.description }}
                                </p>
                            </div>

                            <div class="ml-4 flex-shrink-0 flex">
                                <button @click.prevent="close(notification.id)"
                                    class="rounded-md inline-flex text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                    <span class="sr-only">Close</span>
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
