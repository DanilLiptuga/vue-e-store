<template>
  <v-container>
    <products-with-filter :is-loading="isLoading" :products="products" :title="category"/>
  </v-container>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router/dist/vue-router";
import ProductList from "@/components/products/product-list.vue";
import {watch, ref} from "vue";
import {useCategoryProducts} from "@/hooks/useCategoryProducts";
import ProductsWithFilter from "@/components/common/products-with-filter.vue";

const router = useRoute();
const category = ref(router.params.category as string);
const page = ref(1)
let {isLoading, data: products, error} = useCategoryProducts(category, page, [category, page])
watch(() => router.params.category, ()=>category.value = router.params.category as string, {deep: true})
</script>

<style scoped>

</style>