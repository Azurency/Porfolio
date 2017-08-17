<template>
    <div>
        <case-header :color="color" next-case="/cases/gari" prev-case="/cases/handball-manager">
            <b>Don't Break The Chain</b> est un de mes projets d'application dont j'ai réalisé <b>le design</b> et qui s'est transformé un peu plus tard en projet scolaire <b>Android</b>.
        </case-header>
        <case-intro :roles="roles" :technologies="technologies" :annee="annee">
            J'ai imaginé à quoi pourrait ressembler une application mobile me permettant de suivre la méthode don't break the chain. Dans un premier temps, ce projet a été destiné à améliorer ma conception d'interface, que j'ai pu coder sur Android pendant ma 2e année d'étude informatique.
        </case-intro>
        <article class="case" style="visibility: hidden;" v-scroll-reveal="{ viewFactor: 0, useDelay: 'once', delay: 300 }">
            <section class="case__container">
                <h2 class="case__title">La méthode</h2>
                <p class="case__paragraph">Don't break the chain <img src="~assets/emoji/chains.png" alt="⛓" class="emoji"> est <a href="http://lifehacker.com/281626/jerry-seinfelds-productivity-secret" class="underline-hover">une méthode</a> très simple pour se motiver à mener à bien des projets, elle est utilisée et expliquée par Jerry Seinfeld.</p>
                <p class="case__paragraph">Très simplement :</p>
                <ul class="case__list">
                    <li class="case__list-item">Choisissez un but</li>
                    <li class="case__list-item">Mettez une croix sur un calendrier chaque jour où vous réalisé ce but</li>
                    <li class="case__list-item">Ne brisez pas la chaîne, utilisez-la comme motivation</li>
                </ul>
                <h2>La vue calendrier</h2>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-chain-2.jpg" alt="Catalogue non connecté" class="case__img" width="450px">
                    <p class="case__legend">Test de différentes variations de dégradés, personalisable pour chaque chaine.</p>
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-chain-1.jpg" alt="Ajout d'un commentaire" class="case__img" width="300px">
                    <p class="case__legend">L'écran d'une chaine, ici "Write something".</p>
                </div>
            </div>
            <section class="case__container">
                <p class="case__paragraph">C'est dans la vue calendrier que vous pouvez voir visuellement votre chaîne, les jours où la tâche a été effectuée sont mis en évidence.</p>
                <p class="case__paragraph">On retrouve aussi des statistiques comme la taille de la chaîne actuelle et celle de la plus longue chaîne.</p>
                <p class="case__paragraph">On peut aussi partager sa chaîne, mettre en place des rappels ou changer le thème en tapant sur les boutons en bas.</p>
                <h2 class="case__title">Les chaînes</h2>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-chain-3.jpg" alt="Catalogue non connecté" class="case__img" width="300px">
                    <p class="case__legend">Concepts d'affichage de toutes les chaines en forme de liste.</p>
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-chain-4.jpg" alt="Ajout d'un commentaire" class="case__img" width="300px">
                    <p class="case__legend">Toutes les chaines en forme de cartes.</p>
                </div>
            </div>
            <section class="case__container">
                <p class="case__paragraph">J'ai exploré plusieurs concepts pour afficher l'ensemble de toutes ses chaînes, une version en liste, qui permet d'afficher par exemple la taille de la chaîne actuelle à droite ou une version carte qui permet directement de visuellement voir l'état de la chaîne actuelle.</p>
                <h2 class="case__title">Transformation en projet scolaire</h2>
                <p class="case__paragraph">Lors de ma 2e année d'étude informatique, nous avons eu comme projet de développer une application Android de notre choix par groupe de 2 qui devait au moins contenir :</p>
                <ul class="case__list">
                    <li class="case__list-item">Une base de données</li>
                    <li class="case__list-item">Une ListView</li>
                    <li class="case__list-item">Des préférences</li>
                    <li class="case__list-item">Au moins un appel à un intent</li>
                    <li class="case__list-item">Quelques fragments qui adaptent la mise en page en fonction de l'orientation du téléphone</li>
                </ul>
                <p class="case__paragraph">J'ai donc décidé de développer cette idée d'application pour Android. Vous pouvez retrouver le code sur
                    <rounded-button 
                        text="mon dépôt github" 
                        :color="darkenColor" 
                        link="https://github.com/Azurency/dont-break-the-chain-android"
                    />.</p>
                <p class="case__paragraph">Une version iOS est en cours de réflexion <img src="~assets/emoji/thinking-face.png" alt="🤔" class="emoji">, j'espère avoir le temps de la faire un jour.</p>
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
            color: 'rgba(218, 212, 209, 1.00)',
            darkenColor: Color('rgba(218, 212, 209, 1.00)').rotate(20).saturate(2).darken(0.35).rgb().string(),
            roles: ['Conception', 'Design', 'Développement'],
            technologies: ['UML', 'Sketch', 'Java'],
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
            return Color(this.color).rotate(20).lighten(0.08).rgb()
        },
        block1BackgroundColor () {
            return this.block1.string()
        },
        block1Color () {
            return this.block1.darken(0.55).rgb().string()
        }
    },
    head () {
        return {
            title: 'Don\'t break the chain',
            meta: [
                { hid: 'description', name: 'description', content: 'Étude de concept d\'une application suivant le principe don\'t break the chain. Du design à un projet de développement sur Android en Java.' }
            ]
        }
    },
    transition (to, from) {
        if (from && from.name === 'index') {
            return {
                mode: 'out-in',
                css: false,
                enter (el, done) {
                    window.scrollTo(0, 0)
                    const elt = document.querySelector('#js-caseHeader')
                    document.body.removeChild(elt)
                    done()
                },
                leave (el, done) {
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
