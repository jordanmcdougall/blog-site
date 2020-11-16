<template>
  <v-container>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const article = await $content('/', params.slug).fetch()

      return {
        article,
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  },
}
</script>
