module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - Antoine Lassier',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'author', content: 'Antoine Lassier' },
            { hid: 'keywords', name: 'keywords', content: 'développement,design,site web,mobile,responsive,réalisation,site,créer,orléans,paris,portfolio,antoine lassier,lassier,designer,graphiste,charte graphique,gari,gariapp,gari app,développeur,python' },
            { hid: 'description', name: 'description', content: 'Porfolio d\'Antoine Lassier, développeur et designer web et mobile. Disponible en freelance pour votre création de site web ou applications mobiles à Orléans, Paris et partout en France.' }
        ],
        script: [
            { src: 'https://use.typekit.net/txv3mea.js' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
        vendor: ['babel-polyfill', 'scrollreveal']
    },
    router: {
        scrollBehavior: function (to, from, savedPosition) {
            if (to.hash) {
                return { selector: to.hash }
            }
            return { x: 0, y: window.pageYOffset }
        }
    },
    plugins : [
        { src: '~plugins/vue-scroll-reveal', ssr: false }, 
        { src: '~plugins/vue-tippy', ssr: false }
    ],
    modules: [
        ['@nuxtjs/google-analytics', { ua: 'UA-104678592-1' }],
    ]
}
