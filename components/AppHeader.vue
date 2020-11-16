<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          exact
          @click="navigateExternal(item.to)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>Change the site theme</v-list-item-subtitle>
          <v-btn aria-label="change-app-theme" block @click="toggleTheme()">
            <v-icon>{{ themeIcon }}</v-icon></v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/"
        ><v-toolbar-title class="appTitle" v-text="title"
      /></nuxt-link>
      <v-spacer />
      <AppSearch />
    </v-app-bar>
  </div>
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
          icon: 'mdi-twitter',
          title: 'Twitter',
          to: 'https://twitter.com/mcdougjo',
        },
        {
          icon: 'mdi-github',
          title: 'GitHub',
          to: 'https://github.com/jordanmcdougall',
        },
        {
          icon: 'mdi-coffee',
          title: 'Ko-Fi',
          to: 'https://ko-fi.com/jordanmcdougall ',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Jordan McDougall',
    }
  },
  computed: {
    themeIcon() {
      return !this.$vuetify.theme.dark
        ? 'mdi-weather-night'
        : 'mdi-weather-sunny'
    },
  },
  methods: {
    navigateExternal(route) {
      window.open(route)
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
<style>
.nuxt-link-exact-active {
  color: white;
  text-decoration: none;
}

a {
  color: white;
}

.appHeader {
  color: white;
}
</style>
