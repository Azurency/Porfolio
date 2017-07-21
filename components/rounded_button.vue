<template>
    <a :href="this.link" 
        class="rounded-button" 
        @click="emitClick" 
        v-text="this.text"
        :style="{ backgroundColor: fadedColor, color }">
    </a>
</template>

<script>
import Color from 'color'

export default {
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false,
            default: '#'
        },
        color: {
            type: String,
            required: true
        }
    },
    computed: {
        fadedColor () {
            return Color(this.color).alpha('0.1').string()
        }
    },
    methods: {
        emitClick () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

/* Rounded Button
   ========================================================================== */

.rounded-button {
    background-color: $soft-grey;
    border-radius: 15px;
    padding: 4px 10px;

    &--space-right {
        margin-right: .5em;
    }
}
</style>
