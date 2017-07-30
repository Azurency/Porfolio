<template>
    <header class="index-header">
        <div class="index-header__container">
            <navigation class="index-header__nav" colored/>
            <div class="index-header__info">
                <p class="index-header__text" v-scroll-reveal="{ delay: 100 }">Bonjour, je suis</p>
                <h1 class="index-header__iam" v-scroll-reveal="{ delay: 200 }">Antoine Lassier</h1>
                <p class="index-header__text" v-scroll-reveal="{ delay: 300 }">
                    Un <b>développeur</b> freelance et
                    <b>designer</b> passioné habitant actuellement à Orléans en France. Je créer des applications web et mobiles sur mesure, intuitives, utiles et jolies.
                </p>
            </div>
        </div>
        <div class="index-header__pattern">
            <svg xmlns="http://www.w3.org/2000/svg" width="514" height="553" viewBox="0 0 514 553">
                <defs>
                    <linearGradient id="a" x1="100%" x2=".855%" y1="65.322%" y2="30.225%">
                        <stop stop-color="#E81919" offset="0%" />
                        <stop stop-color="#CB56A0" offset="30.786%" />
                        <stop stop-color="#8C9BD0" offset="62.482%" />
                        <stop stop-color="#9FBEF1" offset="100%" />
                    </linearGradient>
                    <linearGradient id="b" x1="113.379%" x2="50%" y1="-26.763%" y2="79.602%">
                        <stop stop-color="#EC390D" offset="0%" />
                        <stop stop-color="#AE6A50" offset="100%" />
                    </linearGradient>
                    <linearGradient id="c" x1="96.14%" x2="1.924%" y1="96.14%" y2="1.924%">
                        <stop stop-color="#FFFFFF" offset="0%" />
                        <stop stop-color="#FFFFFF" stop-opacity=".429" offset="44.319%" />
                        <stop stop-color="#FFFFFF" stop-opacity=".157" offset="100%" />
                    </linearGradient>
                    <linearGradient id="d" x1="50%" x2="50%" y1="0%" y2="98.143%">
                        <stop stop-color="#5D87C9" offset="0%" />
                        <stop stop-color="#5D87C9" stop-opacity=".294" offset="100%" />
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(0 -14)">
                    <path class="svg-anim svg-anim--top" :class="{ 'svg-anim__1': loaded }" fill="#CAE8F0" d="M558.049183,474 C579.062337,154.231224 574.226932,-3.62554671 543.542969,0.4296875 C493.769531,7.0078125 451,107.753906 304.804688,207.707031 C158.609375,307.660156 -64.4882812,-16.3359375 17.8710938,170.304687 C100.230469,356.945312 50.859375,48.515625 185.796875,62.6835937 C317.556244,76.5178698 59.1817127,295.670234 180.984375,321.410156 C211.036016,327.760813 235.394531,385.226562 129.476563,431.394531 C23.5585938,477.5625 10.0351563,325.445312 140,388.078125 C189.826375,412.090511 256.460905,440.731136 339.90359,474 L558.049183,474 Z M552.861893,548.999974 C552.709676,551.10331 552.556492,553.212694 552.402344,555.328125 C546.672628,553.205791 540.989976,551.096416 535.354385,549 L552.861892,549 L552.861893,548.999974 Z" />
                    <circle class="svg-anim svg-anim--long" :class="{ 'svg-anim__2': loaded }" cx="425.5" cy="238.5" r="138.922" fill="#FFAC3F" />
                    <circle class="svg-anim svg-anim--long" :class="{ 'svg-anim__3': loaded }" cx="283.5" cy="198.5" r="70.5" fill="url(#a)" />
                    <polygon class="svg-anim" :class="{ 'svg-anim__4': loaded }" stroke="url(#b)" stroke-width="10" points="362 393.538 423.946 368 405.55 431.396" stroke-linecap="round" />
                    <path class="svg-anim" :class="{ 'svg-anim__5': loaded }" stroke="url(#c)" stroke-width="10" d="M344.152181,43 C326.864297,59.8272991 331.655728,68.7902154 358.526472,69.8887489 C398.83259,71.536549 348.388112,106.549381 383.887096,110.065078 C419.386079,113.580775 419.547037,132.641499 412.080178,145" stroke-linecap="round" />
                    <polygon class="svg-anim" :class="{ 'svg-anim__6': loaded }" fill="url(#d)" points="430 472.078 494.092 438 528.17 502.092 464.078 536.17" />
                    <circle class="svg-anim" :class="{ 'svg-anim__7': loaded }" cx="237.5" cy="442.5" r="49.5" fill="#82A6C2" />
                    <circle class="svg-anim" :class="{ 'svg-anim__8': loaded }" cx="243.5" cy="436.5" r="49.5" fill="#50CDF7" />
                </g>
            </svg>
    
        </div>
    </header>
</template>

<script>
import Navigation from '~components/navigation.vue'

export default {
    data () {
        return {
            loaded: false
        }
    },
    components: {
        Navigation
    },
    mounted () {
        this.loaded = true
    }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

/* Index Header
   ========================================================================== */

/**
 * 1. Fixe la hauteur du header.
 * 2. Ajoute le fond.
 */

.index-header {
    height: 500px; /* 1 */
    background: $iceberg; /* 2 */

    /**
    * 1. Conteneur flex pour pouvoir placer la navbar et le texte.
    * 2. Occupe toute la hauteur possible.
    */

    &__container {
        display: flex; /* 1 */
        flex-direction: column;
        height: 100%; /* 2 */
        @include container;
    }

    /**
    * 1. Place la navigation a la fin du flex (à droite).
    * 2. Place la navigation au dessus des patterns en position absolute.
    * 3. Centre la navigation sur mobile.
    */

    &__nav {
        align-self: flex-end; /* 1 */
        z-index: 1; /* 2 */
        padding: 2em 0 0 0;
        @include respond-to($phone) {
            align-self: center; /* 3 */
        }
    }

    /**
    * 1. Flex grow à 1 pour prendre toute la hauteur disponible.
    * 2. Display flex pour centrer verticalement facilement le texte.
    * 3. Place le texte au dessus des patterns en position absolute.
    */

    &__info {
        flex: 1 0 auto; /* 1 */
        display: flex; /* 2 */
        flex-direction: column;
        justify-content: center; /* 2 */
        max-width: 600px;
        z-index: 1; /* 3 */
    }

    &__iam {
        color: $dark-text;
        font-size: 48px;
        letter-spacing: -1.5px;
        margin: 0;
        @include respond-to($phone) {
            font-size: 34px;
        }
    }

    &__text {
        font-size: 20px;
        margin: 0;
        b {
            color: $dark-text;
        }
        @include respond-to($phone) {
            font-size: 18px;
        }
    }

    /**
    * 1. Position abolue pour positionner l'élement à droite de la page.
    * 2. Décale la position de l'image sur mobile pour qu'elle ne gene pas.
    */

    &__pattern {
        position: absolute; /* 1 */
        top: 40px;
        right: -20px;
        @include respond-to($phone) {
            right: -150px; /* 2 */
        }
    }
}

.svg-anim {
    opacity: 0;
    transform: translateY(25px);
    transition: all $longer-transition-duration;

    &--long {
        transform: translateY(5em);
    }

    &--top {
        transform: translateY(-25px);
    }

    &__1 {
        transition-delay: 200ms;
        opacity: 1;
        transform: translateY(0);
    }

    &__2 {
        transition-delay: 350ms;
        opacity: 1;
        transform: translateY(0);
    }

    &__3 {
        transition-delay: 400ms;
        opacity: .45;
        transform: translateY(0);
    }

    &__4 {
        transition-delay: 400ms;
        opacity: .6;
        transform: translateY(0);
    }

    &__5 {
        transition-delay: 600ms;
        opacity: 1;
        transform: translateY(0);
    }

    &__6 {
        transition-delay: 600ms;
        opacity: .8;
        transform: translateY(0);
    }

    &__7 {
        transition-delay: 300ms;
        opacity: .5;
        transform: translateY(0);
    }

    &__8 {
        transition-delay: 400ms;
        opacity: .302;
        transform: translateY(0);
    }
}
</style>
