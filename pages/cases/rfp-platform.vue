<template>
    <div>
        <case-header :color="color" next-case="/cases/ma-collec" prev-case="/cases/gari">
            <b>RFP Platform</b> est un logiciel de gestion des appels d'offres simple, fonctionnel et moderne 
            destiné à <b>RCI Bank and Services</b>.
        </case-header>
        <case-intro :roles="roles" :technologies="technologies" :annee="annee">
            J'ai développé un logiciel de gestion des appels d'offres pour RCI Bank and Services. Une première maquette du design avait été réalisée et j'avais carte blanche pour le choix des technologies et l'adaptation du design en application web fonctionnelle.
        </case-intro>
        <article class="case" style="visibility: hidden;" v-scroll-reveal="{ viewFactor: 0, useDelay: 'once', delay: 300 }">
            <section class="case__container">
                <h2 class="case__title">L'expression du besoin</h2>
                <p class="case__paragraph">La gestion des appels d'offres passait jusque là par mail, plutôt que d'opter pour une solution propriétaire onéreuse et complexe, RCI Bank and Services a choisi de faire développer une plateforme simple et sur mesure.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-rfpplatform-1.jpg" alt="Écran d'accueil de la plateforme" class="case__img case__img--shadow" width="960px" >
                <p class="case__legend">Page d'accueil du profil acheteur</p>
            </div>
            <section class="case__container">
                <p class="case__paragraph">La plateforme devait être en mesure de :</p>
                <ul class="case__list">
                    <li class="case__list-item">Gérer 4 profils d'utilisateurs différents (acheteur, client interne, fournisseur, administrateur)</li>
                    <li class="case__list-item">Permettre la création d'appels d'offres, d'offres et une gestion des documents relatifs</li>
                    <li class="case__list-item">Gérer les questions-réponses et les différents statuts d'une offre</li>
                    <li class="case__list-item">D'offrir un système de notification pour suivre l'évolution des appels d'offres</li>
                    <li class="case__list-item">Proposer un aspect monitorage des données sur les appels d'offres</li>
                    <li class="case__list-item">Générer des comptes rendus et résumés des appels d'offres</li>
                    <li class="case__list-item">Fournir un forum d'échange pour les différents pays</li>
                    <li class="case__list-item">Accepter une authentification via le SSO de Renault</li>
                </ul>
            </section>
            <section class="case__container">
                <h2 class="case__title">L'hébergement</h2>
                <p class="case__paragraph">
                    La plateforme est hébergée sur des serveurs DigitalOcean, les fichiers sont stockés sur Amazon AWS S3, et la base de données est une instance Amazon AWS RDS.
                    <br>
                    Le stockage des fichiers sur S3 permet d'optimiser les coûts et d'éviter tout problème de stockage en cas d'utilisation intensive de l'outil. La base de données étant sur son propre serveur, cela permettra de la faire évoluer sans avoir à toucher à l'espace applicatif.
                </p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-rfpplatform-8.jpg" alt="Schéma avec differents graphiques expliquant le fonctionnement des serveurs et de l'hébergement" class="case__img" width="700px" >
                <p class="case__legend">Schéma des serveurs</p>
            </div>
            <div class="case__colored-block" :style="{ background: block1BackgroundColor, color: block1Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block1Color }">L'administration</h2>
                    <p class="case__paragraph">Django permet de proposer facilement un espace d'administration pour les différents aspects de l'application. L'administrateur n'est plus obligé d'accéder manuellement à la base de données pour changer les objets.</p>
                </section>
                <div class="case__flex">
                    <div class="case__flex-item case__flex-item--grid">
                        <img src="~assets/case-rfpplatform-7.jpg" alt="Exemple de visuel de la page administration du site." class="case__img case__img--shadow" height="350px">
                        <p class="case__legend">Interface d'administration</p>
                    </div>
                </div>
            </div>
            <section class="case__container">
                <h2 class="case__title">Adaptation de la maquette</h2>
                <p class="case__paragraph">J'ai dû parfois adapter la maquette fournie pour répondre aux réalités du besoin exprimé. Certains aspects n'avaient aussi pas été pensés et j'ai dû suivre la trame esthétique fournie pour proposer de nouveaux éléments.</p>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-rfpplatform-9.jpg" alt="Visuel de la page de détail d'un appel d'offres vue par les fournisseurs de la maquette" class="case__img case__img--shadow" width="450px">
                    <p class="case__legend">Maquette de la page détail d'un appel d'offres</p>
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-rfpplatform-10.jpg" alt="Visuel de la page de détail d'un appel d'offres vue par les fournisseurs de l'application finale, on remarque une adaptation pour correspondre aux besoins réels" class="case__img case__img--shadow" width="550px">
                    <p class="case__legend">Version finale et adaptée de la même page</p>
                </div>
            </div>
            <div class="case__colored-block" :style="{ background: block2BackgroundColor, color: block2Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block2Color }">Les choix techniques</h2>
                    <p class="case__paragraph">J'ai dû réaliser une <b>web-app</b>, accessible depuis internet. Il devait en effet être possible pour les fournisseurs des différentes entreprises de se connecter à la plateforme pour poser leurs offres.</p>
                    <p class="case__paragraph"><b>Côté client</b>, j'ai choisi d'utiliser le framework Vue.js avec lequel j'ai une bonne expérience ainsi que les technologies classiques, HTML, CSS.</p>
                    <p class="case__paragraph"><b>Côté serveur</b>, j'ai utilisé le framework Django en Python 3. Que ce soit pour l'administration ou le développement pour l'API. Python est sans aucun doute mon langage de programmation favori <img src="~assets/emoji/heart-eyes.png" alt="😍" class="emoji"> et je ne manque jamais l'occasion de travailler avec quand j'ai le choix. La base de données est une instance Postgres.</p>
                </section>
            </div>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-rfpplatform-2.jpg" alt="Page de création d'un nouvel appel d'offres" class="case__img case__img--small-shadow" width="500px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-rfpplatform-3.jpg" alt="Page de détails d'un appel d'offres. Avec aucune questions et 3 fournisseurs consultés." class="case__img case__img--small-shadow" width="500px">
                </div>
            </div>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-rfpplatform-4.jpg" alt="Page de monitorage d'un fournisseur avec toutes ses offres." class="case__img case__img--small-shadow" width="500px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-rfpplatform-6.jpg" alt="Page de notification avec 0 notifications." class="case__img case__img--small-shadow" width="500px">
                </div>
            </div>
            <section class="case__container" style="margin-top: 3em">
                <h2 class="case__title">Utilisation</h2>
                <p class="case__paragraph">Le logiciel a été développé en anglais et doit être utilisé dans différents pays. Chaque acheteur a ainsi un pays et peut uniquement voir les appels d'offres postés dans son pays. Il est utilisé en production depuis novembre 2019 et les retours se feront au fur et à mesure sur l'année 2020.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-rfpplatform-5.jpg" alt="Écran login de la plateforme" class="case__img case__img--shadow" width="350px" >
                <p class="case__legend">Page de login</p>
            </div>
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
            color: 'rgba(127, 212, 204, 1.00)',
            darkenColor: Color('rgba(127, 212, 204, 1.00)').rotate(5).darken(0.45).rgb().string(),
            roles: ['Développement', 'Hebergement', 'Design', 'Tests'],
            technologies: ['Python', 'Django', 'Vue.js', 'Postgres', 'HTML/CSS'],
            annee: '2019'
        }
    },
    components: {
        CaseHeader,
        CaseIntro,
        RoundedButton
    },
    computed: {
        block1 () {
            return Color(this.color).rotate(20).lighten(0.25).rgb()
        },
        block1BackgroundColor () {
            return this.block1.string()
        },
        block1Color () {
            return this.block1.darken(0.55).rgb().string()
        },
        block2 () {
            return Color(this.color).rotate(-155).desaturate(0.45).lighten(0.45).rgb()
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
            title: 'RFP Platform',
            meta: [
                { hid: 'description', name: 'description', content: "Développement d'un logiciel des gestion des appels d'offres pour RCI Bank and Services." }
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
