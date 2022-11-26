<template>
  <v-container>
    <products-with-filter v-model:page="page" title="New products" :products="products" :isLoading="isLoading"/>
  </v-container>
</template>

<script setup lang="ts">
import {useProducts} from "@/hooks/useProducts";
import {ref, watch} from "vue";
import ProductsWithFilter from "@/components/common/products-with-filter.vue";

const page = ref(1);
watch(()=>page.value, ()=>console.log(page.value))
let {data: products, isLoading} = useProducts(page, 15, page);

</script>