<template>
  <v-app dark>
    <AppHeader />
    <v-main>
      <v-container>
        <AppOffline v-if="$nuxt.isOffline" />
        <nuxt />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Jordan McDougall',
    }
  },
}
</script>
