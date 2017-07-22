<template>
    <div class="icon-link">
        <span :style="{ color }" class="icon-link__icon"><slot name="icon"></slot></span>
        <span v-if="this.$slots.pre" class="icon-link__pre"><slot name="pre"></slot></span>
        <rounded-button 
            :text="this.buttonText" 
            :color="this.color"
            :link="this.buttonLink"
            @click="emitClick"
            class="rounded-button--space-right"
        />
        <slot></slot>
    </div>
</template>

<script>
import RoundedButton from '~components/rounded_button.vue'
export default {
    props: {
        color: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        buttonLink: {
            type: String,
            required: false,
            default: ''
        }
    },
    components: {
        RoundedButton
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

/* Icon Link
   ========================================================================== */

/**
 * 1. Display flex plur center verticalement les élements
 */

.icon-link {
    display: flex; /* 1 */
    align-items: center; /* 1 */
    margin: 1em 0;
}

.icon-link__pre {
    margin-right: .5em;
}

/**
 * 1. Display flex plur center verticalement et horizontalement les icone.
 * 2. offset de - de la taille du gutter pour apparaitre "hors grille".
 * 3. Largeur de la taille du gutter pour apparaitre "hors grille".
 */

.icon-link__icon {
    display: flex; /* 1 */
    align-items: center; /* 1 */
    justify-content: center; /* 1 */
    margin-left: -$container-outside-gutter; /* 2 */
    width: $container-outside-gutter; /* 3 */
}
</style>
