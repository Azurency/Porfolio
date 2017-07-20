<template>
    <nav>
        <ul class="nav">
            <li class="nav__item"><a href="" class="nav__link">Accueil</a></li>
            <li class="nav__item"><a href="" class="nav__link">Travail</a></li>
            <li class="nav__item"><a href="" class="nav__link">Contact</a></li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';

/* Navigation
   ========================================================================== */

.nav {
    margin: 0;
    padding: 0;
}

/**
 * 1. Places les items sur la meme ligne.
 */

.nav__item {
    display: inline-block; /* 1 */
    margin: 0 .8em;
    font-size: 14px;
}

.nav__link {
    color: $nav-grey;
    transition: color $default-transition-duration;

    &:hover {
        color: $dark-text;
    }
}
</style>
