<template>
    <header class="case-header" :style="{ backgroundColor: color }">
        <div class="case-header__container">
            <div class="case-header__nav-container">
                <nuxt-link tag="h2" to="/" class="case-header__nav-title">
                    <a>Antoine Lassier</a>
                </nuxt-link>
                <navigation class="case-header__nav" :color="this.darkenColor"/>
            </div>
            <div class="case-header__content">
                <nuxt-link :to="this.nextCase" class="arrow arrow--left" :style="{ color: this.darkenColor }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24">
                        <polyline fill="none" stroke="currentColor" stroke-width="3" points="0 20 10 10 0 0" transform="translate(2 2)" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
                <p class="case-header__description"><slot></slot></p>
                <nuxt-link :to="this.prevCase" class="arrow arrow--right" :style="{ color: this.darkenColor }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24">
                        <polyline fill="none" stroke="currentColor" stroke-width="3" points="0 20 10 10 0 0" transform="translate(2 2)" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script>
import Navigation from '~components/navigation'
import Color from 'color'

export default {
    props: {
        nextCase: {
            type: String,
            required: true
        },
        prevCase: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            darkenColor: Color(this.color).rotate(5).darken(0.45)
        }
    },
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

/* Case Header
   ========================================================================== */

.case-header {
    height: 350px;
    background: $soft-grey;

    &__container {
        display: flex;
        flex-direction: column;
        height: 100%;
        @include container;
    }

    &__nav-container {
        display: flex;
        justify-content: space-between;
        padding: 2em 0 0 0;
    }

    &__nav-title {
        color: $white;
        font-family: "europa", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    &__content {
        display: flex;
        flex: 1 0 auto;
        align-items: center;
        justify-content: space-between;
    }

    &__description {
        color: $white;
        font-size: 20px;
        max-width: 666px;
    }
}


/**
* L'animation de la fleche.
*/

@keyframes pointing_arrow--left {
    0% {
        transform: rotate(180deg) translateX(0px);
    }
    100% {
        transform: rotate(180deg) translateX(10px);
    }
}

@keyframes pointing_arrow--right {
    0% {
        transform: rotate(0deg) translateX(0px);
    }
    100% {
        transform: rotate(0deg) translateX(10px);
    }
}

/**
* 1. Padding pour avoir plus de place pour cliquer pendant l'animation hover
*/

.arrow {
    padding: 1em; /* 1 */
    height: 100%;
    display: block;

    &--left {
        transform: rotate(180deg);

        &:hover {
            animation: $longer-transition-duration pointing_arrow--left infinite alternate;
        }
    }
    &--right {
        transform: rotate(0deg);

        &:hover {
            animation: $longer-transition-duration pointing_arrow--right infinite alternate;
        }
    }
}
</style>

