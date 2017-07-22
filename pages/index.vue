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
        <section class="index-section">
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
        <section class="index-section index-section--two-columns">
            <div class="index-section__column">
                <h3 class="index-section__title">Suivez moi</h3>
                <icon-link color="#398EF3" buttonText="@azurency">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17">
                        <path fill="none" stroke="currentColor" stroke-width="1.5" d="M19,0.00864214135 C18.1729688,0.577465221 17.257275,1.01252361 16.2881818,1.29706319 C15.222765,0.102568705 13.505865,-0.316314228 11.9890704,0.248181875 C10.4722757,0.812677978 9.47823659,2.24047445 9.5,3.82337898 L9.5,4.66548425 C6.41739235,4.74342311 3.49947641,3.31135415 1.72727273,0.850747405 C1.72727273,0.850747405 -1.72727273,8.42969477 6.04545455,11.7981158 C4.26681926,12.9753506 2.14799915,13.5656353 0,13.4823264 C7.77272727,17.6928527 17.2727273,13.4823264 17.2727273,3.79811583 C17.271932,3.56355047 17.2488024,3.32956374 17.2036364,3.09916846 C18.0850664,2.25158368 18.7070782,1.18145291 19,0.00864214135 Z" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <template slot="pre">Sur twitter à</template>
                </icon-link>
                <icon-link color="#D15589" buttonText="mon github">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                        <path fill="none" stroke="currentColor" stroke-width="1.5" d="M5.85919129,15.431848 C1.67405465,16.715924 1.67405465,13.2917214 0,12.8636961 M11.7183826,18 L11.7183826,14.687084 C11.7818988,13.8613352 11.4953074,13.0475014 10.9315769,12.4527918 C13.5598427,12.153174 16.3220329,11.1344738 16.3220329,6.46043718 C16.3218181,5.26524238 15.8722915,4.11588463 15.0664919,3.25024722 C15.4480557,2.20458695 15.4210768,1.04878402 14.9911594,0.022936257 C14.9911594,0.022936257 14.0034672,-0.276681472 11.7183826,1.28989123 C9.79992354,0.758131172 7.77765033,0.758131172 5.85919129,1.28989123 C3.57410669,-0.276681472 2.58641444,0.022936257 2.58641444,0.022936257 C2.15649712,1.04878402 2.12951816,2.20458695 2.51108198,3.25024722 C1.69927187,4.12230575 1.24928225,5.28205171 1.25554099,6.4861187 C1.25554099,11.1259132 4.01773117,12.1446135 6.64599698,12.4784733 C6.08905538,13.0670625 5.8030028,13.8700293 5.85919129,14.687084 L5.85919129,18" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <template slot="pre">Faites un tour sur</template>
                </icon-link>
                <icon-link color="#65C7C2" buttonText="mon linkedin">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                            <path stroke="currentColor" stroke-width="1.5" d="M2.04545455,0 C0.925312255,0 0,0.925312255 0,2.04545455 L0,15.9545455 C0,17.0746879 0.925312255,18 2.04545455,18 L15.9545455,18 C17.0746879,18 18,17.0746879 18,15.9545455 L18,2.04545455 C18,0.925312255 17.0746879,0 15.9545455,0 L2.04545455,0 Z" />
                            <path fill="currentColor" d="M4.44886364 3.04261364C3.67159091 3.04261364 3.04261364 3.67240909 3.04261364 4.44886364 3.04261364 5.22531818 3.67077273 5.85511364 4.44886364 5.85511364 5.2245 5.85511364 5.85511364 5.22531818 5.85511364 4.44886364 5.85511364 3.67322727 5.2245 3.04261364 4.44886364 3.04261364zM11.8380682 6.77556818C10.6639773 6.77556818 9.88486364 7.41804545 9.5625 8.02840909L9.51136364 8.02840909 9.51136364 6.95454545 7.21022727 6.95454545 7.21022727 14.7272727 9.61363636 14.7272727 9.61363636 10.8920455C9.61363636 9.87913636 9.81511364 8.89772727 11.0710227 8.89772727 12.3089318 8.89772727 12.3238636 10.0423636 12.3238636 10.9431818L12.3238636 14.7272727 14.7272727 14.7272727 14.7272727 10.4573864C14.7272727 8.36611364 14.2819773 6.77556818 11.8380682 6.77556818z" />
                            <polygon fill="currentColor" points="3.273 6.955 3.273 14.727 5.702 14.727 5.702 6.955" />
                        </g>
                    </svg>
                    <template slot="pre">Ou sur</template>
                    , c'est plus corporate
                </icon-link>
            </div>
            <div class="index-section__column">
                <h3 class="index-section__title">À propos de moi</h3>
                <p class="index-section__paragraph">
                    Je suis Antoine, né à Orléans en France. J'ai 22 ans et suis en dernière année de
                    <b>Master MIAGE</b> à l'Université d'Orléans.
                    <br><br>Je suis un
                    <b>developpeur full-stack</b> et un
                    <b>designer</b>. Je maitrise un grand nombre de technologies et méthodologies pour construire des sites web et des applications
                    <b>les mieux adaptés</b> à tous les besoins.
                </p>
                <br>
                <icon-link color="#96D557" buttonText="mon CV">
                    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M8.75,0 L1.75,0 C0.783501688,0 0,0.80588745 0,1.8 L0,16.2 C0,17.1941125 0.783501688,18 1.75,18 L12.25,18 C13.2164983,18 14,17.1941125 14,16.2 L14,5.4 L8.75,0 Z" />
                            <polyline points="8.75 0 8.75 5.4 14 5.4" />
                            <path d="M10.5 9.9L3.5 9.9M10.5 13.5L3.5 13.5" />
                            <polyline points="5.25 6.3 4.375 6.3 3.5 6.3" />
                        </g>
                    </svg>
                    <template slot="pre">Vous pouvez aussi télécharger</template>
                </icon-link>
            </div>
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

    &--two-columns {
        display: flex;
        flex-direction: row;

        & .index-section__column:first-child {
            margin-right: $container-outside-gutter*2;
        }

        & .index-section__column:last-child {
            margin-left: $container-outside-gutter*2;
        }

        @include respond-to($phone) {
            flex-direction: column;

            & .index-section__column:first-child {
                margin: 0;
            }

            & .index-section__column:last-child {
                margin: 0;
            }
        }
    }

    &__column {
        flex: 1 1 50%;
    }

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

    &__paragraph {
        margin: 0;

        b {
            font-weight: 700;
            color: $dark-text;
        }
    }
}
</style>
