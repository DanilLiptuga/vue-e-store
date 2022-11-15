<template>
  <v-container>
    <div class="product">
      <h1 class="product__title">{{product?.title}}</h1>
      <div class="product__main">
        <div class="product__left">
          <swiper class="product__image" :slides-per-view="1" :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }">
            <swiper-slide :key="image" v-for="image in product?.images">
              <img :src="image" :alt="product?.title"/>
            </swiper-slide>
          </swiper>

          <!-- Thumbs Swiper -> store swiper instance -->
          <!-- It is also required to set watchSlidesProgress prop -->
          <swiper
              :modules="[Thumbs]"
              watch-slides-progress
              @swiper="setThumbsSwiper"
              :slides-per-view="4"
              :space-between="12"
              :scrollbar="{ draggable: true }"
          >
            <swiper-slide class="product__thumb" :key="image" v-for="image in product?.images">
              <img :src="image" :alt="product?.title"/>
            </swiper-slide>

          </swiper>
        </div>
        <div class="product__right">
          {{ product?.description }}
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import {PropType,ref} from "vue";
import {IProduct} from "@/models/IProduct";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
export default {
  name: "product-single",
  props: {
    product: Object as PropType<IProduct>
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
}
</script>

<style lang="scss" scoped src="./styles/product-single.scss"/>