<template>
  <div class="home">
    <RecentProducts msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecentProducts from "@/components/products/recent-products.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    RecentProducts,
  },
});
</script>
