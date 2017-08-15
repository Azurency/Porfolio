module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        script: [
            { src: 'https://use.typekit.net/txv3mea.js' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        'normalize.css',
        { src: '~assets/scss/main.scss', lang: 'scss' }
    ],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#5D87C9' },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLINT on save
        */
        extend(config, ctx) {
            /* const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.css$/')
            //cssLoader.use.push('postcss-loader')
            cssLoader.use.splice(2, 0, 'postcss-loader'); */

            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        vendor: ['animejs', 'scrollreveal']
    },
    router: {
        scrollBehavior: function (to, from, savedPosition) {
            if (to.hash) {
                return { selector: to.hash }
            }
            return { x: 0, y: window.pageYOffset }
        }
    },
    plugins : [{ src: '~plugins/vue-scroll-reveal', ssr: false }, 
                { src: '~plugins/vue-tippy', ssr: false }]
}
