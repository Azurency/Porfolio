<template>
    <div>
        <case-header :color="color" next-case="/cases/roadtrip" prev-case="/cases/gari">
            <b>Macollec-capsule</b> est un site de gestion de collection de capsule de champagne pour les <b>placomusophiles</b> dont j'ai réalisé <b>le design</b>.
        </case-header>
        <case-intro :roles="roles" :technologies="technologies" :annee="annee">
            J'ai réalisé le design d'un site de collection de capsules de champagne, du choix de la police au logo en passant par le design des pages et des interactions. Le tout en communiquant à chaque étape avec le créateur du site.
        </case-intro>
        <article class="case">
            <section class="case__container">
                <h2 class="case__title">Recherches et besoins</h2>
                <p class="case__paragraph">Macollec-capsule est un projet qui a démarré dans l'optique de proposer une alternative aux classiques « livres » de collection de capsules de champagne. Le site devait permettre aux utilisateurs de gérer plus facilement leur collection et permettre de meilleures interactions avec les autres collectionneurs.</p>
                <p class="case__paragraph">Le collectionneur devait pouvoir :</p>
                <ul class="case__list">
                    <li class="case__list-item">Voir tout le catalogue des capsules</li>
                    <li class="case__list-item">Avoir un aperçu de sa propre collection</li>
                    <li class="case__list-item">Ajouter des commentaires sur ses capsules et noter leur qualité</li>
                    <li class="case__list-item">Filtrer facilement le catalogue des capsules</li>
                    <li class="case__list-item">Afficher des statistiques sur sa collection</li>
                    <li class="case__list-item">Gérer ses informations son abonnement dans son profil</li>
                    <li class="case__list-item">Échanger ses capsules avec les autres abonnés</li>
                </ul>
                <h2 class="case__title">Le logo</h2>
                <p class="case__paragraph">La recherche du logo est parti de l'idée de représenter une capsule, le « C » de collection était un choix naturel pour la forme du logo, après plusieurs concepts, le logo choisi garde la forme d'un C avec une profondeur tout en reprenant les détails d'une capsule de champagne.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-macollec-1.jpg" alt="Les differents concepts" class="case__img" width="400px">
                <p class="case__legend">Les différentes itérations pour arriver au logo final : mélange entre la lettre et une capsule.</p>
            </div>
            <section class="case__container" style="margin-top: 3em">
                <p class="case__paragraph">Il est décliné en multiples couleurs pour pouvoir par exemple réaliser une animation au survol.</p>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-macollec-2.jpg" alt="Le logo final en différentes couleurs" class="case__img">
                <p class="case__legend">Le logo final de macollec capsule en 10 teintes.</p>
            </div>
            <div class="case__colored-block" :style="{ background: block1BackgroundColor, color: block1Color }">
                <section class="case__container">
                    <h2 class="case__title" :style="{ color: block1Color }">Le choix des polices</h2>
                    <p class="case__paragraph">Le choix de la police s'est porté sur <b>Aperçu</b> pour le logo et les éléments de UI comme les boutons et les menus, car c'est une police pleine de caractère tout en restant parfaitement lisible sur une interface.</p>
                    <p class="case__paragraph">Le contenu du site lui utilise la police <b>Source Sans Pro</b>, célèbre pour sa clarté et sa bonne lisibilité dans les interfaces, elle est présente dans le texte des cartes de l'ensemble du site.</p>
                    <div class="case__img-container">
                        <img src="~assets/case-macollec-3.jpg" alt="Les polices utilisées" class="case__img case__img--shadow">
                        <p class="case__legend">Exemples d'utilisation d'Apercu et de Source Sans Pro.</p>
                    </div>
                </section>
            </div>
            <section class="case__container">
                <h2 class="case__title">Le catalogue</h2>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-macollec-4.jpg" alt="Le catalogue de macollec capsule" class="case__img case__img--shadow" width="1000px">
                <p class="case__legend">L'accent est donné sur les capsules et les détails comme les boutons s'adapte en fonction de la couleur principale de la capsule.</p>
            </div>
            <section class="case__container" style="margin-top: 3em">
                <p class="case__paragraph">Dans la page catalogue, l'utilisateur voit les différentes caractéristiques des capsules comme le producteur ou la référence ainsi que les couleurs.<br>Il peut ajouter le nombre d'une certaine capsule qu'il possède et ajouter ou modifier un commentaire. Il peut aussi appliquer des filtres pour trouver plus facilement les capsules.</p>
                <p class="case__paragraph">Le nombre de capsules par page ainsi que le tri peuvent être renseignés et les capsules possédées par l'utilisateur sont affichées grâce à un symbole validé en haut de la carte.</p>
            </section>
            <div class="case__flex">
                <div class="case__flex-item">
                    <img src="~assets/case-macollec-5.jpg" alt="Catalogue non connecté" class="case__img case__img--shadow" width="800px">
                    <p class="case__legend">Interface du catalogue quand l'utilisateur n'est pas connecté.</p>
                </div>
                <div class="case__flex-item" style="margin-left:-100px;">
                    <img src="~assets/case-macollec-6.jpg" alt="Ajout d'un commentaire" class="case__img case__img--shadow" width="700px">
                    <p class="case__legend">Ajout d'un commentaire sur une capsule.</p>
                </div>
            </div>
            <section class="case__container" style="margin-top: 3em">
                <p class="case__paragraph">L'ajout d'un commentaire se fait par une fenêtre modale pour éviter un changement de page inutile. De plus, la fenêtre rappelle quelques détails utiles sur la capsule choisie.</p>
                <p class="case__paragraph">Le catalogue est aussi consultable pour les utilisateurs qui ne sont pas abonnés (ou non identifié) ainsi tout le monde peut évaluer la qualité et quantité des capsules présentes en ligne.</p>
                <h2 class="case__title">Le profil</h2>
            </section>
            <div class="case__img-container">
                <img src="~assets/case-macollec-7.jpg" alt="La page profil" class="case__img case__img--shadow" width="1000px">
                <p class="case__legend">L'utilisateur accède directement à ses statistiques.</p>
            </div>
            <section class="case__container">
                <p class="case__paragraph">Sur la page profil, l'accent a été mis sur les statistiques. L'utilisateur peut voir :</p>
                <ul class="case__list">
                    <li class="case__list-item">Le nombre de capsules possédés, s'il a des double, triples, etc.</li>
                    <li class="case__list-item">Ses producteurs favoris par rapport à ses capsules</li>
                    <li class="case__list-item">Une graphique montrant l'évolution de ses ajouts de capsules</li>
                    <li class="case__list-item">Le cumul de ses cotes</li>
                    <li class="case__list-item">Le pourcentage de capsule qu'il possède par rapport à la totalité du catalogue</li>
                </ul>
                <p class="case__paragraph">Le profil offre aussi un aperçu des dernières capsules ajoutées à son catalogue.</p>
                <h2 class="case__title">Les échanges</h2>
            </section>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-macollec-8.jpg" alt="Catalogue non connecté" class="case__img case__img--small-shadow" width="500px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-macollec-9.jpg" alt="Ajout d'un commentaire" class="case__img case__img--small-shadow" width="500px">
                </div>
            </div>
            <div class="case__flex">
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-macollec-10.jpg" alt="Catalogue non connecté" class="case__img case__img--small-shadow" width="500px">
                </div>
                <div class="case__flex-item case__flex-item--grid">
                    <img src="~assets/case-macollec-11.jpg" alt="Ajout d'un commentaire" class="case__img case__img--small-shadow" width="500px">
                </div>
            </div>
            <p class="case__legend">Les différents écrans des échanges.</p>
            <section class="case__container" style="margin-top: 3em">
                <p class="case__paragraph">La partie échange du site permet aux collectionneurs de s'échanger des capsules en faisant des demandes à d'autres utilisateurs. Ils sélectionnent l'utilisateur et les capsules qui l'intéressent, et un échange commence entre les deux parties pour trouver le bon compromis de l'échange.</p>
                <p class="case__paragraph">J'ai décidé de reprendre les mêmes codes pour la sélection des capsules que pour naviguer dans le catalogue, l'utilisateur n'est donc pas perdu dans une nouvelle interface pour l'échange.<br>Le récapitulatif des demandes et échanges en cours permet d'avoir un oeil sur tout ce qui se passe facilement.</p>
                <h2 class="case__title">Le développement</h2>
                <p class="case__paragraph">Le développement est toujours en cours, je ne peux donc pas vous fournir de liens 👀. Mais dès que tout sera en place, je n'hésiterai pas à le rajouter ici !</p>
            </section>
        </article>
    </div>
</template>

<script>
import Color from 'color'
import { addDynamicCssRule } from '~assets/js/utils'

import CaseHeader from '~components/case_header'
import CaseIntro from '~components/case_intro'

export default {
    data () {
        return {
            color: 'rgba(246, 142, 105, 1.00)',
            darkenColor: Color('rgba(246, 142, 105, 1.00)').rotate(5).darken(0.45).rgb().string(),
            roles: ['Design'],
            technologies: ['Sketch', 'Invision'],
            annee: '2016'
        }
    },
    components: {
        CaseHeader,
        CaseIntro
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
        addDynamicCssRule(`.case__list-item::before{color:${this.darkenColor}}blockquote{border-left-color:${this.color}}`)
    }
}
</script>
