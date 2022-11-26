<template>
  <v-layout class="w-100">
    <header class="w-100">
      <v-navigation-drawer
          v-model="drawer"
          class="v-theme--dark"
          temporary
      >
       <h2 class="drawer-header">Categories</h2>
        <v-divider></v-divider>
        <v-list class="drawer-nav" density="compact" nav v-if="categories">
          <v-list-item
              class="drawer-item"
              :key="category"
              v-for="category in categories"
              prepend-icon="mdi-view-dashboard"
              :title="category.charAt(0).toUpperCase() + category.slice(1)"
              :value="category"
              :to="'/category/'+category"
          />
        </v-list>
        <div v-else>Loading...</div>
      </v-navigation-drawer>
      <v-toolbar class="v-theme--dark container">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link to="/">
          <h1 class="header-title">E-Store</h1>
        </router-link>
        <v-spacer></v-spacer>

        <v-btn icon @click="toggleSearch">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-form @submit.prevent="searchPush" >
          <Transition name="search">
            <v-text-field
                class="search"
                v-if="searchOpened"
                label="Search"
                density="compact"
                variant="solo"
                single-line
                hide-details
                v-model="searchString"
            />
          </Transition>
        </v-form>
        <div @click="toggleLike">
          <v-btn icon v-if="liked">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon v-else>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </div>
      </v-toolbar>

    </header>
  </v-layout>
</template>

<script>
import {useCategories} from "@/hooks/useCategories";

export default {
  name: "Navbar",
  data(){
    return {
      searchOpened: false,
      liked: false,
      searchString: '',
      drawer: null
    }
  },
  methods: {
    toggleSearch: function () {
      this.searchOpened = !this.searchOpened
    },
    toggleLike: function () {
      this.liked = !this.liked
    },
    searchPush: function (){
      this.$router.push('/search/' + this.searchString)
    }
  },
  setup(){
    const {isLoading, data: categories, error} = useCategories();
    return {isLoading, categories, error}
  }
}
</script>

<style lang="scss" scoped src="./styles/navbar.scss"/>