<template>
    <svg v-if="attr.type === 'outline'" xmlns="http://www.w3.org/2000/svg" :class="attr.className" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" :class="attr.className" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clip-rule="evenodd" />
    </svg>
</template>

<script>
export default {
    name: "IconDocumentText",
    props: ['attr']
}
</script>
