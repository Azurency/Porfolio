<template>
    <div> <!-- Pour faire fonctionner l'animation de reveal -->
        <div class="project" :style="{ backgroundColor: color }" @mouseover="isHover=true" @mouseout="isHover=false" @click="gotoProject">
            <div class="project__info">
                <h4 class="project__title" v-text="this.title"></h4>
                <p class="project__description">
                    <slot></slot>
                </p>
                <span class="project__link" :style="{ color: linkColor }">
                    Voir plus
                    <svg class="project__arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M0,4.5 L12,4.5" />
                            <polyline points="7.5 0 12 4.5 7.5 9" />
                        </g>
                    </svg>
                </span>
            </div>
            <div class="project__image">
                <slot name="image"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Color from 'color'

export default {
    props: {
        color: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            isHover: false,
            computedlinkColor: Color(this.color).rotate(10).darken(0.4).desaturate(0.3),
            computedlinkHoverColor: Color(this.color).rotate(10).darken(0.5).desaturate(0.1)
        }
    },
    computed: {
        linkColor () {
            return this.isHover ? this.computedlinkHoverColor : this.computedlinkColor
        }
    },
    methods: {
        gotoProject () {
            this.$emit('navigate', this.$el, this.link)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/_variables.scss';

/* Bloc Projet
   ========================================================================== */

/**
* L'animation de la fleche.
*/
@keyframes pointing_arrow {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(5px);
    }
}

/**
 * 1. Display flex pour center verticalement les info et l'image.
 * 2. Permet au images de ne pas déborder en dehors du projet.
 */
.project {
    display: flex; /* 1 */
    align-items: center; /* 1 */
    margin: 2em 0;
    border-radius: 3px;
    background: $soft-grey;
    height: 260px;
    overflow: hidden; /* 2 */
    cursor: pointer;
    transition: transform $default-transition-duration $fast-bezier;
    @include accelerate(scale);

    @include respond-to($phone) {
        flex-direction: column;
        height: 100%;
    }

    /**
    * 1. Augmente lègèrement la taille du bloc en hover.
    */
    &:hover {
        transform: scale(1.03); /* 1 */
    }

    /**
    * 1. Item flex avec une taille préférée de 350px.
    */
    &__info {
        flex: 1 0 350px; /* 1 */
        padding: 2em 0 2em 2em;
        font-size: 18px;

        @include respond-to($phone) {
            flex: 1 0 auto;
            padding: 1em;
            font-size: 16px;
        }
    }

    /**
    * 1. Passage du texte en CAPITALE.
    * 2. Position relative pour que l'elt ::after soit bien positionné.
    */
    &__title {
        font-family: "europa", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase; /* 1 */
        color: $white;
        position: relative; /* 2 */
        margin: 0;

        @include respond-to($phone) {
            font-size: 20px;
        }

        /**
        * C'est l'élements qui donne l'effet "souligné" des titres.
        * 1. Taille fixe 50px * 3px.
        * 2. Position en bas à gauche du titre.
        */
        &::after {
            content: "";
            position: absolute;
            width: 50px; /* 1 */
            height: 3px; /* 1 */
            background: $white;
            left: 0; /* 2 */
            bottom: -5px; /* 2 */
        }
    }

    &__description {
        color: $white;
    }

    /**
    * 1. Partage l'espace libre avec les infos.
    * 2. Display flex pour aligner les images a la droite du conteneur.
    * 3. La div image prend toutes la hauteur disponible (et pas plus).
    */
    &__image {
        flex: 1 1 auto; /* 1 */
        display: flex; /* 2 */
        justify-content: flex-end; /* 2 */
        align-items: center;
        height: 100%; /* 3 */

        @include respond-to($phone) {
            width: 100%;
            height: auto;

            &>img {
                width: 100%;
                height: auto;
            }
        }
    }

    &__link {
        transition: color $default-transition-duration $fast-bezier;
    }

    &__arrow {
        @include accelerate(translateX);
    }

    /**
    * 1. En hover du bloc, animation de la fleche.
    */
    &:hover &__arrow {
        animation: $longer-transition-duration pointing_arrow infinite alternate; /* 2 */
    }
}
</style>
