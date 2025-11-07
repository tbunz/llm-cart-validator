<template>
  <div class="shop-container">
    <div class="products-container">
        <Product v-for="sp in shopProducts" :product="sp"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PRODUCTS } from '~/data';
import Product from './Product.vue';

const shopProducts = PRODUCTS

</script>

<style scoped lang="scss">

.shop-container {
    height: 32%;

    .products-container {
        height: 100%;
        @include flex-between;
        gap: 8px; 
        overflow-x: auto;   
        flex-wrap: nowrap;  
        -webkit-overflow-scrolling: touch; 
        > * {
            flex: 0 0 auto;
            min-width: 225px; 
        }
        
    }
}

</style>
