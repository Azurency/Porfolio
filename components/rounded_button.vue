<template>
    <a :href="this.link" 
        class="rounded-button" 
        @click="emitClick" 
        v-text="this.text"
        :style="{ backgroundColor: fadedColor, color: textColor }"
        @mouseover="isHover=true"
        @mouseout="isHover=false">
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
    data () {
        return {
            isHover: false,
            computedFadedColor: Color(this.color).alpha(0.1).string(),
            computedFadedColorHover: Color(this.color).alpha(0.2).saturate(0.2).string(),
            computedHoverColor: Color(this.color).darken(0.2).string()
        }
    },
    computed: {
        fadedColor () {
            return this.isHover ? this.computedFadedColorHover : this.computedFadedColor
        },
        textColor () {
            return this.isHover ? this.computedHoverColor : this.color
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
@import 'assets/scss/_variables.scss';

/* Rounded Button
   ========================================================================== */

/**
* 1. Inline-block pour que le padding soit pris en compte dans la hauteur.
*/

.rounded-button {
    display: inline-block; /* 1 */
    background-color: $soft-grey;
    border-radius: $rounded-button-radius;
    padding: 4px 10px;
    transition: background-color $default-transition-duration ease-out, color $default-transition-duration ease-out;

    &--space-right {
        margin-right: .5em;
    }
}
</style>
