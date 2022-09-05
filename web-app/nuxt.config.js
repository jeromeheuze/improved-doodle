import axios from 'axios'
import getRoutes from "./utils/getRoutes";
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Home',
        htmlAttrs: {
            lang: 'en'
        },
        titleTemplate: '%s | Coming Soon Page',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content:'IE=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'LHJ4lTqA90Mjgn5wta1s3BdoiwzXrXWKuJVTy8IEx0U' },
            { hid: 'description', name: 'description', content: 'E2 Land is a premium service for Earth2.io - we are building a service for E2 Ecosim land owners to get useful analytics about their properties and get 3D analytics to consult and decide your next steps for your e2 businesses.' },
            // Twitter
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                hid: 'twitter:url',
                name: 'twitter:url',
                content: 'https://e2.land/'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'Coming Soon Page'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'E2 Land is a premium service for Earth2.io - we are building a service for E2 Ecosim land owners to get useful analytics about their properties and get 3D analytics to consult and decide your next steps for your e2 businesses.'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: '/e2production-social-banner.jpg'
            },
            // Open Graph
            { hid: 'og:site_name', property: 'og:site_name', content: 'Coming Soon Page' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://e2.land/'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Coming Soon Page'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'E2 Land is a premium service for Earth2.io - we are building a service for E2 Ecosim land owners to get useful analytics about their properties and get 3D analytics to consult and decide your next steps for your e2 businesses.'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'e2production-social-banner.jpg'
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: '/e2production-social-banner.jpg'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'Coming Soon Page'
            },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://e2.land/apple-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://e2.land/apple-icon-60x60.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://e2.land/apple-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://e2.land/apple-icon-76x76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: 'https://e2.land/apple-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://e2.land/apple-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://e2.land/apple-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://e2.land/apple-icon-152x152.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://e2.land/apple-icon-180x180.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://e2.land/android-icon-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://e2.land/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://e2.land/favicon-96x96.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://e2.land/favicon-16x16.png' },
            { rel: 'manifest', href: 'https://e2.land/manifest.json' },
            { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:700' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
        ]
    },
    script: [
        { hid: 'animate', src: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', defer: true }
    ],
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        //{ src: '~/plugins/gtag', mode: "client" }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        'nuxt-purgecss',
        ['@fullhuman/postcss-purgecss', {
            content: ['./pages/**/*.vue', './components/**/*.vue'], safelist: ['html', 'body']}
        ]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/axios',
        [
            'nuxt-social-meta',
            {
                site_name: "Coming Soon Page",
                author: "Themes.ForSale",
                img: "",
                img_size: { width: "1200", height: "630" },
                locale: "en_US",
                twitter: "@E2Prod",
                twitter_card: "summary",
                theme_color: "#5bbad5"
            },
        ],
        '@nuxt/content',
        ['nuxt-canonical', { baseUrl: 'https://e2.land',trailingSlashes: true,forceLowercase: true }]
    ],
    //robots.txt
    robots: {
        Sitemap: 'https://e2.land/sitemap.xml',
        UserAgent: '*',
        Allow: '/'
    },
    //content
    content: {
        fullTextSearchFields: ['title', 'description', 'slug'],
        liveEdit: false
    },
    loading: {
        color: 'DodgerBlue',
        height: '10px',
        continuous: true,
        duration: 3000
    },
    hooks: {
    },
    //Sitemap config
    sitemap: {
        hostname: 'https://e2.land',
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        routes() {
            return getRoutes();
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        cssSourceMap: true,
        extractCSS: true,
        analyze: false
    },
    generate: {
        fallback: true
    }
}