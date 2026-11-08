// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  ignores: ['**/components/ui/**'],
  rules: {
    'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
  },
});
