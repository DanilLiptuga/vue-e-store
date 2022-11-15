<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <product-single v-else :product="data" />
</template>

<script setup>
import {useQuery} from "@/utils/fetching/useQuery";
import {useRoute} from "vue-router/dist/vue-router";
import ProductSingle from "@/components/products/product-single";
import {useSingleProduct} from "@/hooks/useSingleProduct";

const router = useRoute();
const {isLoading, data, error} = useSingleProduct(router.params.id)
</script>

<style scoped>

</style>