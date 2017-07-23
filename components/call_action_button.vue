<template>
    <a :href="this.link" class="call-button" :style="{ background: color }">
        <span class="call-button__icon-left">
            <slot name="icon"></slot>
        </span>
        {{ this.text }}
        <span class="call-button__icon-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14">
                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5" transform="translate(1 1)" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0,6 L16,6" />
                    <polyline points="10 0 16 6 10 12" />
                </g>
            </svg>
        </span>
    </a>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';

/* Call Action Button
   ========================================================================== */

.call-button {
    display: inline-flex;
    align-items: center;
    background: $soft-grey;
    padding: .6em 1.2em;
    border-radius: 25px;
    font-size: 20px;
    line-height: 1;
    color: $white;

    &__icon-left {
        margin: 2px .5em 0 0;
    }

    &__icon-right {
        margin: 0 0 0 1em;
    }
}
</style>
