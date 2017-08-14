<template>
    <div> <!-- Pour faire fonctionner l'animation de reveal -->
        <a :href="this.link" class="call-button" :style="{ background: color }">
            <span class="call-button__content">
                <span class="call-button__icon-left">
                    <slot name="icon"></slot>
                </span>{{ this.text }}</span>
            <span class="call-button__icon-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0,6 L16,6" />
                        <polyline points="10 0 16 6 10 12" />
                    </g>
                </svg>
            </span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

/* Call Action Button
   ========================================================================== */

/**
* 1. Inline-flex pour prendre la taille du contenu et pas 100% en flex.
*/

.call-button {
    display: inline-flex; /* 1 */
    align-items: center;
    background: $soft-grey;
    padding: .8em 2.2em;
    border-radius: $call-button-radius;
    font-size: 20px;
    line-height: 1;
    color: $white;
    position: relative;
    opacity: .9;
    transition: all $default-transition-duration $fast-bezier; 

    /**
    * 1. Animation de "levé" du bouton.
    */

    &:hover {
        transform: translateY(-3px); /* 1 */
        opacity: 1; /* 1 */
    }

    /**
    * Pseudo élement représentant l'ombre dérrière le bouton (pour 60fps animation).
    * 1. Le box-shadow que l'ont souhaite pendant le hover.
    * 2. Caché grâve à une opacité 0.
    */

    &::after {
        content: '';
        border-radius: $call-button-radius;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18); /* 1 */
        opacity: 0; /* 2 */
        transition: all 0.6s $fast-bezier;
    }

    /**
    * 1. Affiche l'ombre en hover.
    */

    &:hover::after {
        opacity: 1; /* 1 */
    }

    &__content {
        transition: transform $default-transition-duration $fast-bezier;
    }

    /**
    * 1. Bouge le contenu du bouton vers la gauche en hover.
    */

    &:hover &__content {
        transform: translateX(-.7em); /* 1 */
    }

    &__icon-left {
        margin: 0 .5em 0 0;
    }

    /**
    * 1. Positionement absolute, attaché à droite et placé au milieu du bouton.
    * 2. Caché par défaut.
    */

    &__icon-right {
        position: absolute; /* 1 */
        right: 2.4em; /* 1 */
        top: calc( 50% - 10px ); /* 1 */
        opacity: 0; /* 2 */
        transition: all $default-transition-duration $fast-bezier;
    }

    /**
    * 1. Bouge la fleche vers la droite en hover.
    * 2. Affiche la fleche.
    */

    &:hover &__icon-right {
        transform: translateX(1.2em); /* 1 */
        opacity: 1; /* 2 */
    }
}
</style>
