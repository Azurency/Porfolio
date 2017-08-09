<template>
    <div>
        <case-header :color="color" next-case="/cases/handball-manager" prev-case="/cases/ma-collec">
            J'ai créé <b>un blog</b> statique avec Jekyll pour partager et pouvoir retracer le parcours de mon <b>roadtrip</b> en Angleterre avec un ami.
        </case-header>
        <case-intro :roles="roles" :technologies="technologies" :annee="annee">
            À l'occasion d'un roadtrip en Angleterre avec un ami, j'ai mis en place en blog pour garder une trace de mon voyage. Bien qu'ayant fini de le coder dans le tunnel sous la Manche, j'ai pu publier des articles tous les jours en partageant nos photos et activités.
        </case-intro>
        <article class="case">
            <section class="case__container">
                <h2 class="case__title">Un blog ?</h2>
                <p class="case__paragraph">Quand nous nous sommes décidés avec mon ami Sébastien (👋 coucou si tu passes par là) à organiser un roadtrip, nous avons bien sûr commencé par tant bien que mal essayer de planifier un itinéraire et des "endroits clefs" à visiter.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-roadtrip-1.png" alt="Parcours en angleterre" class="case__img case__img--small-shadow" width="1200px">
                <p class="case__legend">Notre itinéraire en Angleterre avec un passage au Pays de Galle.</p>
            </div>
            <section class="case__container">
                <p class="case__paragraph">Mais j'ai aussi tout de suite eu l'idée de coder un petit blog pour garder une trace de ce voyage et permettre à tous nos proches de nous suivre et voir quelques photos tous les jours.</p>
                <p class="case__paragraph">Je n'avais pas encore eu l'occasion de tester le générateur de site statique Jekyll, c'était donc un petit projet idéal pour le faire et aussi imaginer un design simple et rapide à mettre en place.</p>
            </section>
            <section class="case__container">
                <h2 class="case__title">Le personnage</h2>
                <p class="case__paragraph">J'ai eu pour idée d'illustrer ce blog personnel en créant un personnage me ressemblant le plus possible. J'ai donc créé le personnage en vectoriel sur sketch puis l'ai exporté en format svg pour qu'il s'affiche correctement à tous les formats possibles.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-roadtrip-2.png" alt="Personnage créé" class="case__img" width="300px">
                <p class="case__legend">Le personnage qui me ressemble, avec une carte et un sac pour l'aspect voyage.</p>
            </div>
            <section class="case__container">
                <h2 class="case__title">Page d'accueil</h2>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-roadtrip-3.jpg" alt="Page d'accueil roadtrip" class="case__img case__img--shadow" width="600px">
                <p class="case__legend">La page d'accueil, avec la mascote et les articles.</p>
            </div>
            <section class="case__container">
                <p class="case__paragraph">Sur l'accueil, on retrouve le personnage et le titre du blog dans un header puis la liste des articles du plus récent au plus ancien.</p>
                <p class="case__paragraph">Du côté des polices, j'ai utilisé <b>Futura</b> pour les titres et les boutons et la navigation et <b>Garamond</b> Pro pour le texte des articles.</p>
            </section>
            <div class="case__colored-block" :style="{ background: block1BackgroundColor, color: block1Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block1Color }">Les articles</h2>
                </section>
                <div class="case__flex">
                    <div class="case__flex-item case__flex-item--grid">
                        <img src="~assets/case-roadtrip-4.jpg" alt="article roadtrip" class="case__img case__img--small-shadow" width="500px">
                    </div>
                    <div class="case__flex-item case__flex-item--grid">
                        <img src="~assets/case-roadtrip-5.jpg" alt="autre article roadtrip" class="case__img case__img--small-shadow" width="500px">
                    </div>
                </div>
                <p class="case__legend" style="margin-top: -1em">Deux articles avec des images.</p>
                <section class="case__container">
                    <p class="case__paragraph">Les articles ont un aspect classique :</p>
                    <ul class="case__list">
                        <li class="case__list-item">Le titre</li>
                        <li class="case__list-item">La date de publication</li>
                        <li class="case__list-item">Le temps estimé de lecture (par rapport au nombre de mots)</li>
                        <li class="case__list-item">Le contenu (avec des images)</li>
                    </ul>
                    <p class="case__paragraph">La police Garamond Pro offre un bon confort de lecture pour le corps des articles et la variante italique est élégante pour mettre en avant certains éléments.</p>
                </section>
            </div>
            <section class="case__container">
                <h2 class="case__title">Jekyll</h2>
                <p class="case__paragraph">Le blog est entièrement statique c'est-à-dire que dans la version sur le serveur, il n'y a que des <b>fichiers HTML et CSS</b>. Tout est généré par <a href="https://jekyllrb.com" class="footer_link underline-hover">Jekyll</a>, les posts sont écrits en markdown et ensuite converti en HTML suivant le patron pour les articles.</p>
                <p class="case__paragraph">J'ai utilisé un préprocesseur scss et ai découpé les différents composants du site en fichiers facilitant ainsi la maintenance.</p>
                <p class="case__paragraph">Le petit utilitaire calculant la durée de lecture des posts a été écrit en Ruby (langage utilisé par Jekyll).</p>
                <p class="case__paragraph">N'hésitez pas à aller faire un tour sur
                    <rounded-button 
                        text="le blog du roadtrip" 
                        color="rgba(116, 155, 209, 1.00)" 
                        link="http://roadtrip.azurency.fr"
                    />
                </p>
            </section>
        </article>
    </div>
</template>

<script>
import Color from 'color'
import { addDynamicCssRule } from '~assets/js/utils'

import CaseHeader from '~components/case_header'
import CaseIntro from '~components/case_intro'
import RoundedButton from '~components/rounded_button.vue'

export default {
    data () {
        return {
            color: 'rgba(157, 205, 243, 1.00)',
            darkenColor: Color('rgba(157, 205, 243, 1.00)').rotate(5).darken(0.45).rgb().string(),
            roles: ['Design', 'Développement'],
            technologies: ['Sketch', 'Jekyll', 'HTML/CSS'],
            annee: '2015'
        }
    },
    components: {
        CaseHeader,
        CaseIntro,
        RoundedButton
    },
    computed: {
        block1 () {
            return Color(this.color).rotate(10).lighten(0.1).rgb()
        },
        block1BackgroundColor () {
            return this.block1.string()
        },
        block1Color () {
            return this.block1.darken(0.55).rgb().string()
        }
    },
    beforeMount () {
        addDynamicCssRule(`.case__list-item::before,.case a{color:${this.darkenColor}}blockquote{border-left-color:${this.color}}`)
    }
}
</script>
