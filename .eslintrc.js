module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/one-component-per-file': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-arrow-functions-in-watch': 'off',
    'vue/no-custom-modifiers-on-v-model': 'off',
    'vue/no-dupe-v-else-if': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/experimental-script-setup-vars': 'off',
  },
}
