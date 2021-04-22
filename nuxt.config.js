export default {
  build: {
    publicPath: '/pdpNuxtJs/_nuxt/',
  },
  vue: {
    config: {
      ignoredElements: ['tef-icon'],
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/pdp.vue'),
      })
    },
  },
  globals: {
    id: (globalName) => '_idPdpNuxtJs',
  },

  server: {
    // port: 9000, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pdp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  /*   proxy: {
      '/api/v1': {
        target: 'https://publish-p33452-e117502.adobeaemcloud.com/content/telefonicagermanygmbhprogram/us/en/offers/jcr:content/root/container/container',
        pathRewrite: { '^/api/v1': '' },
        changeOrigin: true,
      },
    }, */

  // Build Configuration: https://go.nuxtjs.dev/config-build
}
