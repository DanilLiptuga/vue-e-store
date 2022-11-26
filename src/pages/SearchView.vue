<template>
  <v-container>
    <products-with-filter :products="products" :is-loading="isLoading" title="Search products"/>
  </v-container>
</template>

<script lang="ts" setup>
import {useProductsSearch} from "@/hooks/useProductsSearch";
import {useRoute} from "vue-router/dist/vue-router";
import ProductList from "@/components/products/product-list.vue";
import {watch, ref} from "vue";
import ProductsWithFilter from "@/components/common/products-with-filter.vue";
const router = useRoute();
const page = ref(1);
const searchString = ref(router.params.query as string);
let {isLoading, data: products, error} = useProductsSearch(searchString, page, [searchString, page])
watch(() => router.params.query, ()=>searchString.value = router.params.query as string, {deep: true})
</script>

<style scoped>

</style>