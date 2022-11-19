<template>
  <v-container>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="error">An error has occurred during products request.</div>
    <div v-else class="recent">
      <div class="recent-header">
        <div class="flex">
          <h1>New products</h1>
        </div>
        <div class="recent-actions">
          <v-select
              :items="items"
              class="recent-sort"
              v-model="sortType"
              label="Sort by"
              variant="underlined"
          />
          <v-text-field
              v-model="searchString"
              :counter="10"
              class="recent-search"
              label="Search"
              variant="underlined"
          />
        </div>
      </div>
      <product-list :products="sortedAndSearchedProducts"/>
      <v-pagination
          v-model="page"
          :length="Math.ceil(products?.total / 15)"
          circle
      ></v-pagination>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import {useProducts} from "@/hooks/useProducts";
import ProductList from "@/components/products/product-list.vue";
import {computed, ref} from "vue";
import {IProduct} from "@/types/models/IProduct";

const page = ref(1);
let {data: products, isLoading} = useProducts(page, 15, page);
const searchString = ref('');
const sortedProducts = computed(() => {
  const productsCopy : IProduct[] = products.value ? [...products?.value?.products as IProduct[]] : products.value;
  switch (sortType.value){
    case "title":
      return productsCopy?.sort((a: IProduct, b: IProduct) => a.title?.localeCompare(b.title))
    case "low_price":
      return productsCopy?.sort((a: IProduct, b: IProduct)=>a.price-b.price)
    case "high_price":
      return productsCopy?.sort((a: IProduct, b: IProduct)=>b.price-a.price)
    default: return productsCopy
  }
})
const sortedAndSearchedProducts = computed(()=>{
  const titleFilter = (product: IProduct)=>product.title.toLowerCase().includes(searchString.value.toLowerCase())
  const descriptionFilter = (product: IProduct)=>product.description?.toLowerCase().includes(searchString.value.toLowerCase())
  return sortedProducts.value?.filter(
      (product: IProduct)=>titleFilter(product) || descriptionFilter(product)
  )
})
const sortType = ref('title');
const items = [
  {
    title: "Title",
    value: "title",
  },
  {
    title: "High price",
    value: "high_price",
  },
  {
    title: "Low price",
    value: "low_price",
  }
];
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../styles/recent-products.scss"></style>
