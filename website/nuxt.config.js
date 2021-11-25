import { getDocumentsRouterTree } from './utils/docs'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 5000 // default: 3000
  },
  router: {
    base: '/eMondrian/',
    extendRoutes (routes, resolve) {
      const docsRoute = routes.find(e => e.name === 'docs')
      if (!Array.isArray(docsRoute.children)) {
        docsRoute.children = []
      }

      const docsComponent = resolve(__dirname, 'components/docs/docViewer.vue')
      const docs = getDocumentsRouterTree(docsComponent)
      docsRoute.children.push(...docs)
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eMondrian',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/eMondrian/favicon.ico' }
    ],
    script: [
      {
        src: 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js',
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/normalize.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{
          from: 'content/',
          to: 'content/'
        }]
      })
    ]
  },

  sitemap: {
    hostname: 'https://sergeisemenkov.github.io/'
  },

  googleFonts: {
    families: {
      Prompt: [400, 600],
      Montserrat: [500]
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  markdownit: {
    runtime: true // Support `$md()`
  }
}
