<script>
export default {
    name: "AdminHeader"
}
</script>

<template>
    <header class="w-full">
        <div class="relative z-20 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <button type="button"
                class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <span class="sr-only">Open sidebar</span>

                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>

            <div class="flex-1 flex justify-between px-4 sm:px-6">
                <div class="flex-1"></div>
                <AdminAccount />
            </div>
        </div>
    </header>
</template>
