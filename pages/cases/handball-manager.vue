<template>
    <div>
        <case-header :color="color" next-case="/cases/dont-break-the-chain" prev-case="/cases/roadtrip">
            <b>Handball team manager</b> est une application qui couvre les aspects de gestion d'un <b>championnat de handball</b> et des <b>comptes rendu de matchs</b> développé en <b>java</b>.
        </case-header>
        <case-intro :roles="roles" :technologies="technologies" :annee="annee">
            Lors de ma première année d'étude informatique, nous avons eu comme projet de fin d'année la réalisation d'une application de gestion d'un championnat de handball en Java. C'était un projet en équipe dans laquelle j'ai pris le role de chef de projet.
        </case-intro>
        <article class="case" style="visibility: hidden;" v-scroll-reveal="{ viewFactor: 0, useDelay: 'once', delay: 300 }">
            <section class="case__container">
                <h2 class="case__title">Un projet scolaire</h2>
                <p class="case__paragraph">Plûtot que de partir dans une description beaucoup trop longue du projet et des différentes demandes, je vous laisse, si vous avez le courage 🤓, 
                    <rounded-button 
                        text="regarder le sujet" 
                        :color="darkenColor" 
                        link="http://roadtrip.azurency.fr"
                    />.
                </p>
                <p class="case__paragraph">En résume l'application devait offrir à l'utilisateur de la possibilitée de :</p>
                <div class="case__flex case__flex--normal-align">
                    <ul class="case__list">
                        <li class="case__list-item">Sélectionner les journées de matchs</li>
                        <li class="case__list-item">Inscrire les équipes participantes</li>
                        <li class="case__list-item">Générer un calendrier des matchs</li>
                    </ul>
                    <ul class="case__list">
                        <li class="case__list-item">Traiter les informations d’un match (buts, fautes…)</li>
                        <li class="case__list-item">Maintenir un classement des équipes</li>
                        <li class="case__list-item">Générer une feuille de match</li>
                    </ul>
                </div>
                <p class="case__paragraph">Le module de compte rendu des matchs devait permettre de :</p>
                <ul class="case__list">
                    <li class="case__list-item">Gérer tout un éventail d’action possible (but, entrée, sortie, tir, fautes, exclusion…)</li>
                    <li class="case__list-item">Sélectionner rapidement une action par le biais de raccourcis</li>
                    <li class="case__list-item">Visualiser facilement ses saisies, le timer du match, les joueurs présents</li>
                    <li class="case__list-item">Générer une feuille de match enrichie</li>
                </ul>
                <h2 class="case__title">L'étude UML</h2>
                <p class="case__paragraph">Nous avons commencé l'analyse par la réalisation de diagrammes UML. Le diagramme de cas d'utilisation nous a permis de bien cerner les attentes des utilisateurs ciblés par chaque module.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-handball-1.png" alt="Diagramme des cas d'utilisation" class="case__img" width="500px">
                <p class="case__legend">Le diagramme UML. On voit rapidement quelles sont les fonctionnalités principales et celles qui en découlent.</p>
            </div>
            <section class="case__container">
                <p class="case__paragraph">Nous avons aussi réalisé le classique diagramme de classes, ainsi que les descriptions textuelles. Si cela vous intéresse vous pouvez 
                    <rounded-button 
                        text="consulter toute l'analyse" 
                        :color="darkenColor" 
                        link="http://roadtrip.azurency.fr"
                    />.
                </p>
                <h2 class="case__title">L'interface</h2>
                <p class="case__paragraph">J'ai réalisé l'interface en dessinant tout d'abord des maquettes papier puis en me tournant vers <a href="http://balsamiq.com" class="underline-hover">balsamiq</a> un outil pour créer des maquettes interactives, qui a permis de mieux visualiser les enchaînements d'écrans.</p>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-handball-3.jpg" alt="maquette handball" class="case__img case__img--shadow" width="500px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-handball-4.jpg" alt="autre maquette handball" class="case__img case__img--shadow" width="500px">
                </div>
            </div>
            <section class="case__container">
                <p class="case__paragraph">Une fois les différents concepts de l'interface validés par l'équipe, j'ai réalisé le design entièrement sous Photoshop.</p>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-handball-5.png" alt="Sélection des dates" class="case__img case__img--shadow" width="550px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-handball-6.png" alt="Modification équipes" class="case__img case__img--shadow" width="550px">
                </div>
            </div>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-handball-7.png" alt="Résumé du championnat" class="case__img case__img--shadow" width="550px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-handball-8.png" alt="gestion du championnat" class="case__img case__img--shadow" width="550px">
                </div>
            </div>
            <div class="case__colored-block" :style="{ background: block1BackgroundColor, color: block1Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block1Color }">Le développement</h2>
                    <p class="case__paragraph">L'application a été codée en Java en suivant le principe MVC (Modèle Vue Contrôleur) qui permet de rendre le code plus modulaire. Nous avons aussi décidé d'utiliser <b>JavaFX</b> pour l'interface (à l'époque, JavaFX était assez récent et nous avions appris à utiliser swing en cours).</p>
                </section>
                <div class="case__img-container">
                    <img src="~assets/case-handball-9.png" alt="Arhcitecture MVC" class="case__img case__img--shadow" width="300px">
                    <p class="case__legend">Arborescence de fichiers. On voit le découpage des classes suivant le modèle MVC</p>
                </div>
                <section class="case__container">
                    <p class="case__paragraph">JavaFX permet de personnaliser l'interface par le biais de style CSS, ce qui offre une assez grande flexibilité. De plus JavaFx propose aussi de base des objets intéressants comme les graphes et un système d’animation simple.</p>
                    <p class="case__paragraph">Nous avons aussi utilisé des fichiers YAML pour échanger les fichiers entre les deux modules de l'application.</p>
                </section>
            </div>
            <section class="case__container">
                <h2 class="case__title">Quelques détails</h2>
                <p class="case__paragraph">J'ai créer pour ce projet 
                    <rounded-button 
                        text="un guide d'utilisation" 
                        :color="darkenColor" 
                        link="https://gitlab.com/Azurency/groupe22a"
                    /> que vous pouvre consulter au format pdf.
                </p>
                <p class="case__paragraph">Vous pouvez aussi aller voir le code directemement depuis 
                    <rounded-button 
                        text="le dépôt gitlab" 
                        :color="darkenColor" 
                        link="https://gitlab.com/Azurency/groupe22a"
                    />.
                </p>
            </section>
        </article>
    </div>
</template>

<script>
import Color from 'color'
import { addDynamicCssRule } from 'assets/js/utils'

import CaseHeader from '~/components/case_header'
import CaseIntro from '~/components/case_intro'
import RoundedButton from '~/components/rounded_button.vue'

export default {
    data () {
        return {
            color: 'rgba(186, 234, 138, 1.00)',
            darkenColor: Color('rgba(186, 234, 138, 1.00)').rotate(5).darken(0.45).rgb().string(),
            roles: ['Chef de projet', 'Conception', 'Design', 'Développement'],
            technologies: ['UML', 'Photoshop', 'Java (JavaFX)'],
            annee: '2014'
        }
    },
    components: {
        CaseHeader,
        CaseIntro,
        RoundedButton
    },
    computed: {
        block1 () {
            return Color(this.color).rotate(20).lighten(0.08).rgb()
        },
        block1BackgroundColor () {
            return this.block1.string()
        },
        block1Color () {
            return this.block1.darken(0.55).rgb().string()
        }
    },
    transition (to, from) {
        if (from && from.name === 'index') {
            return {
                mode: 'out-in',
                css: false,
                enter (el, done) {
                    console.log('enter case')
                    window.scrollTo(0, 0)
                    const elt = document.querySelector('#js-caseHeader')
                    document.body.removeChild(elt)
                    done()
                },
                leave (el, done) {
                    console.log('leave case')
                    done()
                }
            }
        }
        return {
            mode: 'out-in',
            css: false,
            enter (el, done) {
                window.scrollTo(0, 0)
                done()
            },
            leave (el, done) {
                done()
            }
        }
    },
    beforeMount () {
        addDynamicCssRule(`.case__list-item::before,.case a{color:${this.darkenColor}}blockquote{border-left-color:${this.color}}`)
    }
}
</script>
