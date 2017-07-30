<template>
    <footer class="footer">
        <p class="footer__item" v-scroll-reveal>© 2017 Antoine Lassier.</p>
        <p class="footer__item footer__item--grayed" v-scroll-reveal>
            <a href="#" class="footer_link underline-hover">antoine.lassier@gmail.com</a>
        </p>
        <p class="footer__item footer__item--grayed" v-scroll-reveal>Merci d'être passé ❤️</p>
    </footer>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

/* Footer
   ========================================================================== */

/**
 * 1. Taille du texte réduite dans le footer.
 * 2. Réduit le padding sur téléphone, pour afficher plus.
 */
 
.footer {
    padding: 2.5em .5em;
    text-align: center;
    font-size: 14px; /* 1 */
    font-weight: normal;
    @include respond-to($phone) {
        padding: 1em .1em; /* 2 */
    }

    &__item--grayed {
        color: $soft-grey;
    }

    /**
    * 1. Les paragraphes s'affichent sur la même ligne.
    * 2. Espace horizontal entre les items.
    * 3. Réduit l'espace horizontal et ajoute une espace vertial sur téléphone.
    */
    
    &__item {
        display: inline-block; /* 1 */
        margin: 0 1em; /* 2 */
        position: relative;
        @include respond-to($phone) {
            margin: .25em .5em; /* 3 */
        }
    }

    /**
    * 1. Display inline-block pour pouvoir appliquer un padding seulement au lien.
    * 2. On change la largeur de la bordure en hover.
    */

    &_link {
        display: inline-block; /* 1 */
        padding: 0.25em 0; /* 1 */

        &::after {
            border-bottom-width: $hover-small-border-width; /* 2 */
        }

        &:hover::before {
            border-bottom-width: $hover-small-border-width; /* 2 */
        }

        &:hover::after {
            border-bottom-width: $hover-small-border-width; /* 2 */
        }
    }
}
</style>
