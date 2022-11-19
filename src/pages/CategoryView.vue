<template>
  <v-container>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="error">An error has occurred during products request.</div>
    <product-list v-else :products="products?.products"/>
    <v-pagination
        v-model="page"
        :length="Math.ceil(products?.total / 15)"
        circle
    ></v-pagination>
  </v-container>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router/dist/vue-router";
import ProductList from "@/components/products/product-list.vue";
import {watch, ref} from "vue";
import {useCategoryProducts} from "@/hooks/useCategoryProducts";

const router = useRoute();
const category = ref(router.params.category as string);
const page = ref(1)
let {isLoading, data: products, error} = useCategoryProducts(category, page, [category, page])
watch(() => router.params.category, ()=>category.value = router.params.category as string, {deep: true})
</script>

<style scoped>

</style>