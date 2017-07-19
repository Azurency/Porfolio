<template>
    <footer class="footer">
        <p class="footer__item">© 2017 Antoine Lassier.</p>
        <p class="footer__item footer__item--grayed">
            <a href="">antoine.lassier@gmail.com</a>
        </p>
        <p class="footer__item footer__item--grayed">Merci d'être passé ❤️</p>
    </footer>
</template>

<style lang="scss">
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
}

.footer__item--grayed {
    color: $soft-grey;
}

/**
 * 1. Les paragraphes s'affichent sur la même ligne.
 * 2. Espace horizontal entre les items.
 * 3. Réduit l'espace horizontal et ajoute une espace vertial sur téléphone.
 */
 
.footer__item {
    display: inline-block; /* 1 */
    margin: 0 1em; /* 2 */
    @include respond-to($phone) {
        margin: .25em .5em; /* 3 */
    }
}
</style>
