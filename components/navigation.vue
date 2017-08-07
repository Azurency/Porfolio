<template>
    <nav>
        <ul class="nav">
            <li class="nav__item" style="visibility: hidden;" v-scroll-reveal="{ delay: 150 }"><a href="" class="nav__link underline-hover">Accueil</a></li>
            <li class="nav__item" style="visibility: hidden;" v-scroll-reveal="{ delay: 300 }"><a href="" class="nav__link underline-hover">Travail</a></li>
            <li class="nav__item" style="visibility: hidden;" v-scroll-reveal="{ delay: 450 }"><a href="" class="nav__link underline-hover">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
import Color from 'color'
import { addDynamicCssRule } from '~assets/js/utils'

export default {
    props: {
        color: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            hoverColor: Color(this.color).rotate(5).darken(0.45).rgb()
        }
    },
    beforeMount () {
        addDynamicCssRule(`.nav{color:${this.color}}.nav__link:hover{color:${this.hoverColor}}`)
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
}
</style>
