<template>
  <v-container>
    <div v-if="isLoading">
      Loading...
    </div>
    <product-list v-else :products="products?.products"/>
  </v-container>
</template>

<script lang="ts" setup>
import {useProductsSearch} from "@/hooks/useProductsSearch";
import {useRoute} from "vue-router/dist/vue-router";
import ProductList from "@/components/products/product-list.vue";
import {watch} from "vue";

const router = useRoute();
const searchString = router.params.query as string;
let {isLoading, products, error, refetch} = useProductsSearch(searchString)
watch(() => router.params.query, ()=>refetch(router.params.query as string), {deep: true})
</script>

<style scoped>

</style>