<template>
    <div class="page-body">
        <div class="content">
            <nuxt/>
        </div>
        <page-footer/>
        <script>
        // eslint-disable-next-line
        try {Typekit.load({async: true});} catch (e) {}
        </script>
    </div>
</template>

<script>
import PageFooter from '~/components/footer.vue'
export default {
    components: {
        PageFooter
    }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss'; // Hack pour prefixer le scss sans configurer nuxt.config.js
</style>

