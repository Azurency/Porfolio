<template>
    <header class="index-header">
        <div class="index-header__container">
            <navigation class="index-header__nav" color="rgba(93, 178, 201, 1.00)"/>
            <div class="index-header__info">
                <p class="index-header__text" style="visibility: hidden;" v-scroll-reveal="{ delay: 150 }">Bonjour, je suis</p>
                <h1 class="index-header__iam" style="visibility: hidden;" v-scroll-reveal="{ delay: 300 }">Antoine Lassier</h1>
                <p class="index-header__text" style="visibility: hidden;" v-scroll-reveal="{ delay: 450 }">
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
                    <path class="svg-anim" data-start="-25px" data-delay="300" fill="#CAE8F0" d="M558.049183,474 C579.062337,154.231224 574.226932,-3.62554671 543.542969,0.4296875 C493.769531,7.0078125 451,107.753906 304.804688,207.707031 C158.609375,307.660156 -64.4882812,-16.3359375 17.8710938,170.304687 C100.230469,356.945312 50.859375,48.515625 185.796875,62.6835937 C317.556244,76.5178698 59.1817127,295.670234 180.984375,321.410156 C211.036016,327.760813 235.394531,385.226562 129.476563,431.394531 C23.5585938,477.5625 10.0351563,325.445312 140,388.078125 C189.826375,412.090511 256.460905,440.731136 339.90359,474 L558.049183,474 Z M552.861893,548.999974 C552.709676,551.10331 552.556492,553.212694 552.402344,555.328125 C546.672628,553.205791 540.989976,551.096416 535.354385,549 L552.861892,549 L552.861893,548.999974 Z" />
                    <g class="svg-anim-container"><circle title="Autre tooltip" @mouseover="hoverShape" @mouseleave="leaveShape" class="svg-anim js-floating-shape" data-duration="15s"  data-start="100px" data-delay="450" cx="425.5" cy="238.5" r="138.922" fill="#FFAC3F" /></g>
                    <g class="svg-anim-container"><circle title="Et oui, ça bouge ! incroyable hein" @mouseover="hoverShape" @mouseleave="leaveShape" class="svg-anim js-floating-shape"  data-reverse data-duration="9s" data-start="100px" data-delay="500" cx="283.5" cy="198.5" r="70.5" fill="url(#a)" data-opacity=".45" /></g>
                    <g class="svg-anim-container"><polygon class="svg-anim js-floating-shape" data-reverse data-duration="15s" data-delay="500" stroke="url(#b)" stroke-width="10" points="362 393.538 423.946 368 405.55 431.396" stroke-linecap="round" data-opacity=".6"  /></g>
                    <g class="svg-anim-container"><path class="svg-anim js-floating-shape" data-reverse data-delay="700" stroke="url(#c)" stroke-width="10" d="M344.152181,43 C326.864297,59.8272991 331.655728,68.7902154 358.526472,69.8887489 C398.83259,71.536549 348.388112,106.549381 383.887096,110.065078 C419.386079,113.580775 419.547037,132.641499 412.080178,145" stroke-linecap="round" /></g>
                    <g class="svg-anim-container"><polygon class="svg-anim js-floating-shape" data-delay="700" data-min-offset="-25" data-max-offset="25" fill="url(#d)" points="430 472.078 494.092 438 528.17 502.092 464.078 536.17" data-opacity=".8" /></g>
                    <g class="svg-anim-container"><circle class="svg-anim js-floating-shape" data-duration="9s" data-delay="400" data-min-offset="-25" data-max-offset="25" cx="237.5" cy="442.5" r="49.5" fill="#82A6C2" data-opacity=".5"  /></g>
                    <g class="svg-anim-container"><circle class="svg-anim js-floating-shape" data-duration="15s" data-delay="500"  cx="243.5" cy="436.5" r="49.5" fill="#50CDF7" data-opacity=".3"  /></g>
                </g>
            </svg>
    
        </div>
    </header>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import { getRandomInt } from 'assets/js/utils.js'
const HACK_TIMEOUT_TIME = 50

export default {
    components: {
        Navigation
    },
    data () {
        return {
            tippyInstances: []
        }
    },
    methods: {
        runShapeAnimation (shape) {
            if (!shape.classList.contains('js-floating-shape')) return
            const duration = shape.hasAttribute('data-duration') ? shape.getAttribute('data-duration') : getRandomInt(10, 15) + 's'
            const reverse = shape.hasAttribute('data-reverse') ? 'reverse' : 'normal'
            const delay = getRandomInt(500, 1000)

            shape.style.animationDuration = duration
            shape.parentElement.style.animationDuration = getRandomInt(18, 25) + 's'
            shape.style.animationDirection = reverse
            shape.parentElement.style.animationDirection = reverse
            shape.style.animationDelay = delay
            shape.parentElement.style.animationDelay = delay
            shape.parentElement.style.animationPlayState = 'running'
            shape.style.animationPlayState = 'running'
        },
        hoverShape (event) {
            const shape = event.target

            // Hack de la position pour Firefox (https://bugzilla.mozilla.org/show_bug.cgi?id=1066435)
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                const correctShapePosition = (shape) => {
                    const st = window.getComputedStyle(shape, null)
                    const tr = st.getPropertyValue('-moz-transform') || st.getPropertyValue('transform') || null
                    if (tr && tr !== 'none') {
                        const values = tr.split('(')[1].split(')')[0].split(',')
                        shape.setAttribute('transform', 'translate(' + values[4] + ' ' + values[5] + ')')
                    }
                }
                correctShapePosition(shape)
                correctShapePosition(shape.parentElement)
            }

            // Affichage du tooltip
            const tippyInstance = this.tippyInstances.find((instance) => instance.el === shape)
            let currentTippy
            if (tippyInstance) {
                currentTippy = tippyInstance.tippy
            } else {
                currentTippy = window.tippy(shape)
                this.tippyInstances.push({
                    el: shape,
                    tippy: currentTippy
                })
            }
            const popper = currentTippy.getPopperElement(shape)
            currentTippy.show(popper, 375)

            // Mise en pause de l'animation
            // Hack timeout pour minimiser le 'flicker' dans Safari (pas sûr du vrai impact)
            setTimeout(() => {
                shape.parentElement.style.animationPlayState = 'paused'
                shape.style.animationPlayState = 'paused'
            }, HACK_TIMEOUT_TIME)
        },
        leaveShape (event) {
            const shape = event.target

            // Hide du tooltip s'il existe
            const tippyInstance = this.tippyInstances.find((instance) => instance.el === shape)
            if (tippyInstance) {
                const currentTippy = tippyInstance.tippy
                const popper = currentTippy.getPopperElement(shape)
                currentTippy.hide(popper, 375)
            }

            // Relancement de l'animation
            // Hack timeout pour minimiser le 'flicker' dans Safari
            setTimeout(() => {
                shape.parentElement.style.animationPlayState = 'running'
                shape.style.animationPlayState = 'running'
            }, HACK_TIMEOUT_TIME)
        }
    },
    mounted () {
        const shapes = document.querySelectorAll('.svg-anim')
        shapes.forEach((shape) => {
            // Position initiale
            shape.style.transform = 'translateY(' + (shape.hasAttribute('data-start') ? shape.getAttribute('data-start') : '25px') + ')'

            // Transition vers l'état post-chargement
            const opacity = shape.hasAttribute('data-opacity') ? shape.getAttribute('data-opacity') : 1
            const delay = shape.hasAttribute('data-delay') ? parseInt(shape.getAttribute('data-delay')) : 0
            setTimeout(() => {
                shape.style.opacity = opacity
                shape.style.transform = 'translateY(0px)'
                setTimeout(() => {
                    this.runShapeAnimation(shape)
                }, delay)
            }, delay)
        }, this)
    }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

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

/**
* Hack rotate pour Firefox, qui est clairement en train de disparaitre heureusement
*/

@keyframes floatingX {
	0% {
		transform: translate3D(0px, 0, 0) rotate(0.0001deg);	
	}
	20% {
		transform: translate3D(5px, 0, 0) rotate(0.0001deg);	
	}	
	40% {
		transform: translate3D(17px, 0, 0) rotate(0.0001deg);	
	}	
	60% {
		transform: translate3D(5px, 0, 0) rotate(0.0001deg);	
    }
    80% {
		transform: translate3D(-7px, 0, 0) rotate(0.0001deg);	
	}
	100% {
		transform: translate3D(0px, 0, 0) rotate(0.0001deg);
	}			
}

@keyframes floatingY {
	0% {
		transform: translate3D(0, 0px, 0) rotate(0.0001deg);	
	}
	25% {
		transform: translate3D(0, 20px, 0) rotate(0.0001deg);	
    }
    50% {
		transform: translate3D(0, 0px, 0) rotate(0.0001deg);	
    }
    75% {
		transform: translate3D(0, -20px, 0) rotate(0.0001deg);	
	}
	100% {
		transform: translate3D(0, 0px, 0) rotate(0.0001deg);
	}			
}

/**
 * 1. Opacité 0 au chargement de la page.
 * 2. Transition pour l'opacité et le translateX au chargement de la page.
 * 3. Mise en place de l'animation de flottement.
 */


.svg-anim {
   opacity: 0; /* 1 */
   transition: all $longer-transition-duration; /* 2 */
   animation-name: floatingX; /* 3 */
   animation-iteration-count: infinite; /* 3 */
   animation-timing-function: ease-in-out; /* 3 */
   animation-play-state: paused; /* 3 */
   @include accelerate(transform);
}

/**
 * 1. Mise en place de l'animation de flottement (container car impossible de stack des animations).
 */

.svg-anim-container {
    animation-name: floatingY; /* 1 */
    animation-iteration-count: infinite; /* 1 */
    animation-timing-function: ease-in-out; /* 1 */
    animation-play-state: paused; /* 1 */
    @include accelerate(transform);
}
</style>
