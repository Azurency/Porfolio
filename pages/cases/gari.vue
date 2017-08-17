<template>
    <div>
        <case-header :color="color" next-case="/cases/ma-collec" prev-case="/cases/dont-break-the-chain">
            <b>G.A.R.I.</b> est un logiciel développé pour les réseaux de transport désirant avoir
            <b>une solution conviviale, performante et moderne</b> pour affecter leurs véhicules aux services.
        </case-header>
        <case-intro :roles="roles" :technologies="technologies" :annee="annee">
            Pour remplacer leur outil Excel existant, Keolis Orléans m'a demandé de développer de A à Z un logiciel d'affectation de véhicules à des services. J'ai eu carte blanche pour le choix du design et des technologies.
        </case-intro>
        <article class="case" style="visibility: hidden;" v-scroll-reveal="{ viewFactor: 0, useDelay: 'once', delay: 300 }">
            <section class="case__container">
                <h2 class="case__title">Étude du besoin</h2>
                <p class="case__paragraph">Les entreprises de transport doivent affecter des véhicules à des services (heure de début, une heure de fin, une ligne, un dépôt et un type de véhicule). Par exemple, un service représente le fait que sur une Ligne 1 un bus de type standard doit être affecté depuis le dépôt A à partir de 7h00 et que ce véhicule rentrera à 17h00.</p>
                <p class="case__paragraph">Ces affectations doivent prendre en compte de multiples contraintes :</p>
                <ul class="case__list">
                    <li class="case__list-item">Faire rouler ou interdire certains véhicules sur certains parcours</li>
                    <li class="case__list-item">Affecter les véhicules avec flocages marketing en priorité</li>
                    <li class="case__list-item">Positionner les véhicules qui rentrent à une heure précise pour le nettoyage</li>
                    <li class="case__list-item">Prendre en compte les véhicules en maintenance</li>
                    <li class="case__list-item">...</li>
                </ul>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-gari-1.jpg" alt="Écran de gestion des indisponibilités" class="case__img case__img--shadow" width="960px" >
            </div>
            <section class="case__container">
                <p class="case__paragraph">Le logiciel devait donc être en mesure de :</p>
                <ul class="case__list">
                    <li class="case__list-item">Réaliser une affectation rapidement</li>
                    <li class="case__list-item">Prendre en compte toutes les contraintes avant affectation</li>
                    <li class="case__list-item">Permettre de toujours avoir la main par une modification manuelle simple</li>
                    <li class="case__list-item">Gérer les indisponibilités et le nettoyage</li>
                </ul>
                <h2 class="case__title">La conception</h2>
                <p class="case__paragraph">J’ai commencé ma phase de conception par interroger les différents acteurs qui allait interagir avec G.A.R.I. pour identifier les besoins et les problèmes qu’ils rencontraient et comment trouver la bonne solution.</p>
                <p class="case__paragraph">Par exemple :</p>
                <blockquote>Quels sont les points d’entrées des données (services) ?</blockquote>
                <blockquote>Quels sont les problèmes avec le système actuel ?</blockquote>
                <blockquote>Est-ce que certaines contraintes sont plus importantes que d’autres ? Certaines contraintes peuvent-elles être enfreintes ?</blockquote>
            </section>
            <div class="case__colored-block" :style="{ background: block1BackgroundColor, color: block1Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block1Color }">Quelques diagrammes</h2>
                    <p class="case__paragraph">Après cette phrase d’audit, j’ai pu commencer la conception avec des diagrammes de cas d’utilisation, des modélisations MCD et diagrammes de classe UML.</p>
                </section>
                <div class="case__flex">
                    <div class="case__flex-item case__flex-item--grid">
                        <img src="~assets/case-gari-2.jpg" alt="MCD services" class="case__img case__img--shadow" height="300px">
                        <p class="case__legend">MCD des services et des liens avec les autres tables</p>
                    </div>
                    <div class="case__flex-item case__flex-item--grid">
                        <img src="~assets/case-gari-3.jpg" alt="MCD ligne" class="case__img case__img--shadow" height="300px">
                        <p class="case__legend">MCD ligne et groupe de ligne</p>
                    </div>
                </div>
            </div>
            <section class="case__container">
                <h2 class="case__title">Maquette de l'interface</h2>
                <p class="case__paragraph">J’ai aussi dessiné des maquettes de l’interface sur papier.</p>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-gari-4.jpg" alt="Maquette 1" class="case__img case__img--shadow" height="600px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-gari-5.jpg" alt="Maquette 2" class="case__img case__img--shadow" height="600px">
                </div>
            </div>
            <div class="case__colored-block" :style="{ background: block2BackgroundColor, color: block2Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block2Color }">Les choix techniques</h2>
                    <p class="case__paragraph">J’ai choisi de réaliser <b>une web-app</b>, accessible sur le réseau de l’entreprise. L’avantage par rapport à une application de bureau, en Java par exemple, est que le logiciel n’a pas besoin d’être installé poste par poste par le service informatique. Toute personne connectée au réseau interne peut accéder via une adresse à entrer dans le navigateur à l’application.</p>
                    <p class="case__paragraph"><b>Côté client</b>, on retrouve les technologies classiques du web HTML5, CSS3 et le framework réactif Vue.js que j’ai commencé à utiliser progressivement (sans tout réécrire) à partir de la v1.5.</p>
                    <p class="case__paragraph"><b>Côté serveur</b>, j’ai opté pour un développement en Python 3, que ce soit pour la logique serveur ou pour les algorithmes d’affectations.<br>Python est un langage que j’apprécie beaucoup et que je trouve élégant <img src="~assets/emoji/heart-eyes.png" alt="😍" class="emoji">. J’ai développé sous un environnement virtuel python sur lequel j’ai utilisé le framework Flask avec l’ORM SQLAlchemy et MySQL, le tout sur un serveur Linux, Ubuntu 16.06.</p>
                </section>
            </div>
            <section class="case__container">
                <h2 class="case__title">La version 1.0</h2>
                <p class="case__paragraph">C’est la première version qui a été utilisée en production pendant un peu moins d’un an. Elle a différents modules de gestion :</p>
                <div class="case__flex case__flex--normal-align">
                    <ul class="case__list">
                        <li class="case__list-item">Véhicules</li>
                        <li class="case__list-item">Coupures</li>
                        <li class="case__list-item">Indisponibilité</li>
                        <li class="case__list-item">Affectation</li>
                        <li class="case__list-item">Lignes</li>
                    </ul>
                    <ul class="case__list">
                        <li class="case__list-item">Nettoyage</li>
                        <li class="case__list-item">Contraintes</li>
                        <li class="case__list-item">Équipements</li>
                        <li class="case__list-item">Dépôts</li>
                    </ul>
                </div>
                <p class="case__paragraph">L’affectation est réalisée en environ une seconde pour 200 véhicules et environ 150 services.</p>
                <h2 class="case__title">Les évolutions, v1.5</h2>
                <p class="case__paragraph">La v1.0 a été développée en été 2016 et j’ai au début d’été 2017 développé une mise à jour v1.5 pour intégrer des améliorations de l’expérience utilisateur ainsi que de nouvelles fonctionnalités.</p>
                <p>Parmi les nouveautés :</p>
                <ul class="case__list">
                    <li class="case__list-item">Module feuille de travail pour éviter la double saisie d’informations avec d’autres applications/feuilles Excel</li>
                    <li class="case__list-item">Module d’insertion de services dans la base de données</li>
                    <li class="case__list-item">Résolutions des bugs</li>
                    <li class="case__list-item">Nouvelles options dans le nettoyage</li>
                    <li class="case__list-item">Gestion des bus affrétés à d’autres entreprises</li>
                    <li class="case__list-item">Multiples améliorations de l’interface</li>
                </ul>
            </section>
            <div class="case__flex">
                <div class="case__flex-item">
                    <img src="~assets/case-gari-6.jpg" alt="Écran véhicules" class="case__img case__img--shadow" width="600px">
                    <p class="case__legend">Interface de gestion des véhicules avec des onglets et un code couleur</p>
                </div>
                <div class="case__flex-item" style="margin-left:-160px;">
                    <img src="~assets/case-gari-7.jpg" alt="Écran coupures" class="case__img case__img--shadow" width="450px">
                    <p class="case__legend">Écran des coupures</p>
                </div>
            </div>
            <div class="case__img-container">
                <img src="~assets/case-gari-8.jpg" alt="Écran affectation" class="case__img case__img--shadow" width="960px" style="margin-top: 1em;">
                <p class="case__legend">Écran principal, l'affectation. Les dépôts peuvent être différenciés avec les couleurs différentes des lignes, les types de véhicules ont tous un code couleur.</p>
            </div>
            <section class="case__container" style="margin-top: 3em">
                <h2 class="case__title">Quelques détails</h2>
                <p class="case__paragraph">Depuis la v1.5, les choix proposés dans les modals sont plus clairs pour que l'utilisateur ait une idée précise de l'action qu'il va effectuer, plus de "Ok" et "annuler" sans contexte.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-gari-9.jpg" alt="Fenetre modale de confirmation" class="case__img case__img--shadow" width="500px">
                <p class="case__legend">Oui, supprimer ou Non, garder cette indisponibilité = un choix clair.</p>
            </div>
            <section class="case__container" style="margin-top: 3em">
                <h2 class="case__title">Retours utilisateur</h2>
                <p class="case__paragraph">Les retours utilisateurs ont jusque là été très positifs. L’outil est agréable à utiliser, pratique et leur permet de gagner du temps.<br>Les améliorations de la version 1.5 ont été aussi bien accueillies et d’autres modifications sont déjà en train d’être étudiées pour une prochaine version.</p>
                <p class="case__paragraph">N'hésitez pas à tester la démo sur 
                    <rounded-button 
                        text="le site de G.A.R.I." 
                        color="#74C4CC" 
                        link="http://gariapp.fr"
                    />
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
            color: 'rgba(165, 230, 237, 1.00)',
            darkenColor: Color('rgba(165, 230, 237, 1.00)').rotate(5).darken(0.45).rgb().string(),
            roles: ['Conception', 'Design', 'Développement', 'Tests'],
            technologies: ['Python (Flask)', 'UML/Merise', 'Vue.js', 'MySQL', 'HTML/CSS'],
            annee: '2016-2017'
        }
    },
    components: {
        CaseHeader,
        CaseIntro,
        RoundedButton
    },
    computed: {
        block1 () {
            return Color(this.color).rotate(10).rgb()
        },
        block1BackgroundColor () {
            return this.block1.string()
        },
        block1Color () {
            return this.block1.darken(0.55).rgb().string()
        },
        block2 () {
            return Color(this.color).desaturate(0.9).lighten(0.21).rgb()
        },
        block2BackgroundColor () {
            return this.block2.string()
        },
        block2Color () {
            return this.block2.darken(0.7).rgb().string()
        }
    },
    head () {
        return {
            title: 'G.A.R.I.',
            meta: [
                { hid: 'description', name: 'description', content: 'Étude du développement de l\'application web G.A.R.I., gari app. Créée pour gérer l\'affectation de véhicules à des services dans les réseaux de transport comme Keolis ou Transdev.' }
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
                    if (elt) {
                        document.body.removeChild(elt)
                    }
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
        addDynamicCssRule(`.case__list-item::before{color:${this.darkenColor}}blockquote{border-left-color:${this.color}}`)
    }
}
</script>
