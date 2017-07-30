import Vue from 'vue'

let defaultOptions = {
    scale: 1,
    duration: 600,
    useDelay: 'onload',
    distance: '25px'
}

const sr = require('scrollreveal')(defaultOptions)

const VueScrollReveal = {
    install (Vue) {
        Vue.directive('scroll-reveal', {
            inserted: (el, binding) => {
                const options = binding.value || {}

                if (binding.modifiers) {
                    if (binding.modifiers.reset) {
                        options.reset = true
                    }

                    if (binding.modifiers.nomobile) {
                        options.mobile = false
                    }
                }

                sr.reveal(el, options)
            }
        })
    }
}

Vue.use(VueScrollReveal)
