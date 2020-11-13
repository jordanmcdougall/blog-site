<template>
  <div>
    <!-- <v-text-field v-model="search"></v-text-field>
    <v-card v-if="articles.length">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >{{ article.title }}</NuxtLink
          >
        </li>
      </ul>
    </v-card> -->
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="articles"
      :search-input.sync="search"
      class="mx-4"
      item-text="title"
      no-filter
      flat
      hide-details
      hide-no-data
      return-object
      clearable
      :append-icon="icon"
      prepend-icon="mdi-magnify"
    >
      <template slot="item" slot-scope="{ item }">
        <v-list-item-content style="width: 300px">
          <nuxt-link :to="`/blog/${item.slug}`">
            <v-row @click="clearSearch()">
              <v-col cols="2">
                <v-img height="2.5rem" width="10rem" src="/icon.png"></v-img>
              </v-col>
              <v-col cols="10">
                <p class="searchResult searchTitle">
                  {{ item.title.toUpperCase() | searchResultLength }}
                </p>
                <p class="searchResult searchDescription">
                  {{ item.description | searchResultLength }}
                </p>
              </v-col>
              <v-divider />
            </v-row>
          </nuxt-link>
        </v-list-item-content> </template
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  filters: {
    searchResultLength(text) {
      return text.length > 40 ? `${text.substring(0, 40)}...` : text
    },
  },
  data() {
    return {
      select: null,
      query: '',
      articles: [],
      loading: false,
      search: null,
      icon: '',
    }
  },
  watch: {
    async search(query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('/')
        .only(['title', 'slug', 'description'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    },
  },
  methods: {
    myFilter() {
      return this.articles
    },
    clearSearch() {
      this.select = ''
    },
  },
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
.searchResult {
  margin-top: 0;
  margin-bottom: 0;
}

.searchTitle {
  font-style: bold;
}

.searchDescription {
  font-style: italic;
}

.nuxt-link-exact-active {
  color: grey;
}

a {
  text-decoration: none !important;
  color: white;
}
</style>
