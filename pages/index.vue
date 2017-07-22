<template>
    <div>
        <index-header/>
        <section class="index-section">
            <h3 class="index-section__title">Actuellement</h3>
            <icon-link color="#FF934F" buttonText="G.A.R.I.">
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" transform="translate(1)">
                        <rect width="14.144" height="15.06" x="2.928" y=".75" stroke-width="1.5" rx="3.6" />
                        <rect width="8.197" height="3.955" x="5.901" y="4.098" stroke-width="1.5" rx="1.8" />
                        <ellipse cx="6.291" cy="11.995" rx="1" ry="1" />
                        <ellipse cx="13.689" cy="12.015" rx="1" ry="1" />
                        <path stroke-width="1.5" d="M17.6444444,4.3321634 L17.6444444,4.3321634 L17.6444444,4.3321634 L17.6444444,4.3321634 C18.564919,4.3321634 19.3111111,4.89628461 19.3111111,5.5921634 L19.3111111,7.38136349 L19.3111111,7.38136349 C19.3111111,8.07724228 18.564919,8.64136349 17.6444444,8.64136349 L17.6444444,8.64136349 L17.6444444,8.64136349" />
                        <path stroke-width="1.5" d="M0.555555556,4.32 L0.555555556,4.32 L0.555555556,4.32 L0.555555556,4.32 C1.47603014,4.32 2.22222222,4.88412122 2.22222222,5.58 L2.22222222,7.3692001 L2.22222222,7.3692001 C2.22222222,8.06507888 1.47603014,8.6292001 0.555555556,8.6292001 L0.555555556,8.6292001 L0.555555556,8.6292001" transform="matrix(-1 0 0 1 2.778 0)" />
                        <path stroke-width="1.5" d="M17.0555556,12.6 L17.0555556,16.7662576 C17.0555556,17.9167379 16.2596173,18.8493865 15.2777778,18.8493865 C14.2959382,18.8493865 13.5,17.9167379 13.5,16.7662576 L13.5,15.7397756" />
                        <path stroke-width="1.5" d="M6.45555517,12.6 L6.45555517,16.7662576 C6.45555517,17.9167379 5.65961695,18.8493865 4.6777774,18.8493865 C3.69593784,18.8493865 2.89999962,17.9167379 2.89999962,16.7662576 L2.89999962,15.7397756" transform="matrix(-1 0 0 1 9.356 0)" />
                    </g>
                </svg>
                Un logiciel de d'affectation de services à des véhicules en respectant des contraintes.
            </icon-link>
            <icon-link color="#398EF3" buttonText="Freelance">
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="12.444" y="3.556" rx="1.778" />
                        <path d="M12.6,16 L12.6,1.77777778 C12.6,0.795938223 11.7941125,0 10.8,0 L7.2,0 C6.20588745,0 5.4,0.795938223 5.4,1.77777778 L5.4,16" />
                    </g>
                </svg>
                Je suis disponible pour travailler avec vous, n'hésitez pas a me contacter.
            </icon-link>
        </section>
        <section class="index-section" ref="projets">
            <h3 class="index-section__title">Mon travail</h3>
            <block-projet title="G.A.R.I." color="rgba(150, 213, 87, 1.00)" link="#">
                Création d'un logiciel de gestion de l'affectation de services à des véhicules pour les réseaux de transport.
                <img src="~assets/projet_gari.png" alt="Capture G.A.R.I. v1.5" slot="image" height="100%">
            </block-projet>
            <block-projet title="Macollec-capsule" color="rgba(57, 142, 243, 1.00)" link="#">
                Réalisation du design d'un site de gestion d'une collection de capsules de champagne.
                <img src="~assets/projet_macollec.png" alt="Capture Macollec-Capsule" slot="image" height="100%">
            </block-projet>
            <block-projet title="Roadtrip blog" color="rgba(188, 188, 188, 1.00)" link="#">
                À l'occasion d'un roadtrip en Angletterre, j'ai mis en place en blog pour garder une trace de mon voyage.
                <img src="~assets/projet_roadtrip.png" alt="Illustration self-portrait et capture article" slot="image" height="100%">
            </block-projet>
            <block-projet title="Handball team manager" color="rgba(101, 199, 194, 1.00)" link="#">
                Lors d'un projet d'étude, j'ai créer un logiciel de gestion d'un championat de handball.
                <img src="~assets/projet_handball.png" alt="Captures Handball Manager" slot="image" height="100%">
            </block-projet>
            <block-projet title="Don't break the chain" color="rgba(209, 85, 137, 1.00)" link="#">
                Design d'un prototype d'application iOS et développement d'un version android pour un projet scolaire.
                <img src="~assets/projet_dontbreakthechain.png" alt="Design de Don't break the chain" slot="image" height="100%">
            </block-projet>
        </section>
    </div>
</template>

<script>
import IndexHeader from '~components/header.vue'
import IconLink from '~components/icon_link.vue'
import BlockProjet from '~components/bloc_projet.vue'

export default {
    components: {
        IndexHeader,
        IconLink,
        BlockProjet
    }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

/* Index
   ========================================================================== */

.index-section {
    @include container;
    margin-top: 5em;

    /**
    * 1. En gras.
    * 2. Ajoute un espace entre la bordure et le titre.
    */

    &__title {
        font-family: "europa", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 26px;
        font-weight: 700; /* 1 */
        letter-spacing: -1px;
        color: $dark-text;
        padding-bottom: 5px; /* 2 */
        border-bottom: 2px solid $title-border-bottom-color;
        margin: 0 0 1em 0;
    }
}
</style>
