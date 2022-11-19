<template>
  <TransitionGroup name="list" tag="div" class="product-list">
    <product-item :product="product" :key="product.id" v-for="product in products"/>
  </TransitionGroup>
</template>

<script lang="ts">
import {IProduct} from "@/types/models/IProduct";
import {PropType} from 'vue';
import ProductItem from "@/components/products/product-item.vue";

export default {
  name: "product-list",
  components: {ProductItem},
  props: {
    products: Object as PropType<IProduct[]>
  }
}
</script>

<style scoped>
.product-list{
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 16px;
}
</style>