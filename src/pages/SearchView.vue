<template>
  <v-container>
    <div v-if="isLoading">
      Loading...
    </div>
    <product-list v-else :products="products?.products"/>
    <v-pagination
        v-model="page"
        :length="Math.ceil(products?.total / 15)"
        circle
    ></v-pagination>
  </v-container>
</template>

<script lang="ts" setup>
import {useProductsSearch} from "@/hooks/useProductsSearch";
import {useRoute} from "vue-router/dist/vue-router";
import ProductList from "@/components/products/product-list.vue";
import {watch, ref} from "vue";
const router = useRoute();
const page = ref(1);
const searchString = ref(router.params.query as string);
let {isLoading, data: products, error} = useProductsSearch(searchString, page, [searchString, page])
watch(() => router.params.query, ()=>searchString.value = router.params.query as string, {deep: true})
</script>

<style scoped>

</style>