<template>
    <nav>
        <ul class="nav" :class="{ 'nav--colored': colored }">
            <li class="nav__item" style="visibility: hidden;" v-scroll-reveal="{ delay: 150 }"><a href="" class="nav__link underline-hover">Accueil</a></li>
            <li class="nav__item" style="visibility: hidden;" v-scroll-reveal="{ delay: 300 }"><a href="" class="nav__link underline-hover">Travail</a></li>
            <li class="nav__item" style="visibility: hidden;" v-scroll-reveal="{ delay: 450 }"><a href="" class="nav__link underline-hover">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        colored: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>


<style lang="scss">
@import '~assets/scss/_variables.scss';

/* Navigation
   ========================================================================== */

.nav {
    margin: 0;
    padding: 0;
    color: $nav-grey;

    /**
    * 1. Places les items sur la meme ligne.
    */

    &__item {
        display: inline-block; /* 1 */
        margin: 0 .8em;
        font-size: 14px;
        position: relative;
    }

    &__link {
        color: inherit;
        transition: color $default-transition-duration;
        display: inline-block;
        padding: $container-outside-gutter/4 0;

        &:hover {
            color: $dark-text;
        }
    }

    &--colored {
        color: $fountain-blue;

        & .nav__link:hover {
            color: $fountain-blue-hover;
        }
    }
}
</style>
