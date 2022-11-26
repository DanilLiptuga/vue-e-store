<template>
  <v-container>
    <products-with-filter title="New products" :products="products" :isLoading="isLoading"/>
  </v-container>
</template>

<script setup lang="ts">
import {useProducts} from "@/hooks/useProducts";
import {ref} from "vue";
import ProductsWithFilter from "@/components/common/products-with-filter.vue";

const page = ref(1);
let {data: products, isLoading} = useProducts(page, 15, page);

</script>