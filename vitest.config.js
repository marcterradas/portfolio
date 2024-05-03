import path from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    include: ['**/test/*.{js,tsx,ts}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
})
