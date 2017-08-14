<template>
    <div class="stat">
        <div class="stat_icon" :style="{ color }"><slot name="icon"></slot></div>
        <h6 class="stat_title" v-text="this.title"></h6>
        <p class="stat_text"><slot></slot></p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables.scss';

/* Stat bloc
   ========================================================================== */

.stat {
    &_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
    }

    &_title {
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        color: $soft-grey;
        margin: .5em 0;
    }

    &_text {
        margin: .5em 0;
    }
}
</style>
