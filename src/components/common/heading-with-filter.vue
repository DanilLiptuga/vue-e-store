<template>
  <div class="header">
    <div class="flex">
      <h1>{{ title }}</h1>
    </div>
    <div class="actions">
      <v-select
          :items="items"
          class="sort"
          :model-value="sortType"
          @update:modelValue="changeSort"
          label="Sort by"
          variant="underlined"
      />
      <v-text-field
          :model-value="search"
          @update:modelValue="changeSearch"
          :counter="10"
          class="search"
          label="Search"
          variant="underlined"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {computed, PropType, ref} from "vue";
import {IProduct} from "@/types/models/IProduct";
import ProductList from "@/components/products/product-list.vue";

export default {
  name: "heading-with-filter",
  props: {
    title: {type: String, required: true},
    sortType: {type: String, required: true},
    search: {type: String, required: true}
  },
  methods: {
    changeSort: function (value: string) {
      this.$emit("update:sortType", value)
    },
    changeSearch: function (value: string) {
      this.$emit("update:search", value)
    }
  },
  setup(){
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
    return {items}
    }
}
</script>

<style scoped src="./styles/heading-with-filter.scss" lang="scss"/>