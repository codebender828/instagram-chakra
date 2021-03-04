import * as iconSet from './utils/icons'

export default {
  target: 'static',
  head: {
    title: 'Instagram - Built with Chakra UI Vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],
  chakra: {
    icons: {
      iconPack: 'fe',
      iconSet
    },
    extendTheme: {
      colors: {
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923'
        }
      }
    }
  }
}
