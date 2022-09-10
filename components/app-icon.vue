<template>
    <component :is="name" :attr="attr" />
</template>

<script>
export default {
    name: "Icon",

    props: {
        name: {
            type: String,
            required: true,
            default: 'home'
        },
        type: {
            type: String,
            default: 'outline'
        },
        className: {
            type: String,
            default: 'outline'
        },
    },

    computed: {
        iconsRef() {
            return iconsRef;
        },

        attr() {
            return {
                name: this.name,
                type: this.type,
                className: this.className
            }
        }
    }
}
</script>
