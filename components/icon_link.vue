<template>
    <div class="icon-link">
        <span :style="{ color }" class="icon-link__icon">
            <slot name="icon"></slot>
        </span>
        <div class="icon-link__content">
            <span v-if="this.$slots.pre" class="icon-link__pre">
                <slot name="pre"></slot>
            </span>
            <rounded-button 
                :text="this.buttonText" 
                :color="this.color" 
                :link="this.buttonLink" 
                @click="emitClick" 
                class="rounded-button--space-right" 
            />
            <span class="icon-link__post">
                <slot></slot>
            </span>
        </div>
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
 * 1. Display flex plur center verticalement les élements.
 */

.icon-link {
    display: flex; /* 1 */
    align-items: center; /* 1 */
    margin: 1em 0;

    & .rounded-button {
        flex: 0 0 auto;
    }

    /**
    * 1. Wrap pour que sur téléphone, le texte soit en dessous du bouton.
    */
    &__content {
        display: flex;
        align-items: center;
        flex-wrap: wrap; /* 1 */
    }

    &__pre {
        margin-right: .5em;
    }

    /**
    * 1. Sur téléphone, le texte est wrap et espacé du bouton associé.
    */
    &__post {
        @include respond-to($phone) {
            margin-top: .5em; /* 1 */
        }
        @include respond-to($phone-landscape) {
            flex: 1 1 100%;
        }
    }

    /**
    * 1. Display flex plur center verticalement et horizontalement les icone.
    * 2. offset de - de la taille du gutter pour apparaitre "hors grille".
    * 3. Largeur de la taille du gutter pour apparaitre "hors grille" et pas de grow ni shrink.
    */

    &__icon {
        display: flex; /* 1 */
        align-items: center; /* 1 */
        justify-content: center; /* 1 */
        margin-left: -$container-outside-gutter; /* 2 */
        flex: 0 0 $container-outside-gutter; /* 3 */

        /**
        * 1. Sur téléphone, l'icone est alignée avec le bouton en haut du flex.
        */
        @include respond-to($phone) { 
            margin: 6px 0 0 0; /* 1 */
            align-self: flex-start; /* 1 */
        }

        @include respond-to($phone-landscape) {
            margin-top: 6px;
            align-self: flex-start; /* 1 */
        }
    }
}
</style>
