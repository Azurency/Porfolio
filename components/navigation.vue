<template>
    <nav>
        <ul class="nav" :class="{ 'nav--colored': colored }">
            <li class="nav__item"><a href="" class="nav__link">Accueil</a></li>
            <li class="nav__item"><a href="" class="nav__link">Travail</a></li>
            <li class="nav__item"><a href="" class="nav__link">Contact</a></li>
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

        &::before {
            content: '';
            position: absolute;
            display: block;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 0%;
            transition: width $default-transition-duration ease;
        }

        &::after {
            content: '';
            position: absolute;
            display: block;
            bottom: 0;
            right: 0;
            height: 1px;
            width: 0%;
            border-bottom: $hover-border-width solid;
            transition: width $longer-transition-duration ease;
        }

        &:hover::before {
            width: 100%;
            border-bottom: $hover-border-width solid;
        }

        &:hover::after {
            width: 100%;
            border-bottom: $hover-border-width solid transparent;
            transition: all 0s ease;
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
