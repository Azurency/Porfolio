<template>
    <div class="case-intro" style="visibility: hidden;" v-scroll-reveal="{ useDelay: 'once', delay: 200 }">
        <div class="case-intro__container">
            <div class="case-intro__item case-intro__item--large">
                <h5 class="case-intro__title">Introduction</h5>
                <p class="case-intro__paragraph"><slot></slot></p>
            </div>
            <div class="case-intro__item">
                <h5 class="case-intro__title">Roles</h5>
                <ul class="case-intro__list">
                    <li v-for="role in roles"
                        :key="role"
                        v-text="role">
                    </li>
                </ul>
            </div>
            <div class="case-intro__item">
                <h5 class="case-intro__title">Technologies</h5>
                <ul class="case-intro__list">
                    <li v-for="technologie in technologies" 
                        :key="technologie" 
                        v-text="technologie">
                    </li>
                </ul>
            </div>
            <div class="case-intro__item">
                <h5 class="case-intro__title">Année</h5>
                <p class="case-intro__paragraph" v-text="annee"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        roles: {
            type: Array,
            required: true
        },
        technologies: {
            type: Array,
            required: true
        },
        annee: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/_variables.scss';

/* Case intro
   ========================================================================== */

.case-intro {
    border-bottom: $small-border-height solid $case-intro-border-color;

    &__container {
        display: flex;
        @include container;
        padding: 2em;
    }

    &__title {
        font-weight: 500;
        font-size: 14px;
        color: $soft-grey;
        margin: 0 0 1em 0;
        padding: 0;
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__paragraph {
        margin: 0;
        padding: 0;
    }

    &__item {
        flex: 1 1 15%;
        padding: 0 1em;

        &--large {
            flex: 1 1 500px;
        }

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }
}
</style>
