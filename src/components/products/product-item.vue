<template>
  <router-link class="product" :to="`/product/${product.id}`">
    <img class="product__image" :src="product.thumbnail" alt="">
    <div class="product__content">
    <h3 class="product__title">{{product.title}}</h3>
    <span class="product__price">${{product.price}}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import {IProduct} from '@/types/models/IProduct';
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: "product-item",
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    }
  },
})
</script>

<style lang="scss" scoped src="./styles/product-item.scss"/>