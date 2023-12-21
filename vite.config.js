import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/projeto-massas-sao-jose/' // Substitua pelo nome do seu repositório
    : '/'
}
