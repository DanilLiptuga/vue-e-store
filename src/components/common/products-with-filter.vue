<template>
  <div class="wrapper">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="error">An error has occurred during products request.</div>
    <div v-else class="recent">
      <heading-with-filter
          v-model:sort-type="sortType"
          v-model:search="searchString"
          :title="title"/>
      <product-list :products="sortedAndSearchedProducts"/>
      <v-pagination
          @update:modelValue="changePage"
          :model-value="page"
          :length="Math.ceil(products?.total / 15)"
          circle
      ></v-pagination>
    </div>

  </div>
</template>

<script lang="ts">
import {computed, PropType, ref} from "vue";
import {IProduct} from "@/types/models/IProduct";
import ProductList from "@/components/products/product-list.vue";
import { defineComponent } from 'vue'
import HeadingWithFilter from "@/components/common/heading-with-filter.vue";
export default defineComponent({
  name: "products-with-filter",
  components: {HeadingWithFilter, ProductList},
  props: {
    title: String,
    page: {
      type: Number,
      default: 1
    },
    products: {
      type: Object as PropType<{ products: IProduct[] }>,
      required: true,
    },
    isLoading: Boolean
  },
  methods: {
    changePage: function (value: string) {
      this.$emit("update:page", value)
    }
  },

  setup(props){
    const searchString = ref('');
    const sortedProducts = computed(() => {
      const productsCopy : IProduct[] = props.products ? [...props.products?.products as IProduct[]] : props.products;
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
    return {searchString, sortedProducts, sortedAndSearchedProducts, sortType}
  }
})
</script>