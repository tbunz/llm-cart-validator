<template>
  <div class="shop-container">
    <div>
        Click to add products
    </div>

    <div v-for="product in shopProducts">{{ product?.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { PRODUCTS } from '~/data';

const shopProducts = PRODUCTS

</script>

<style scoped lang="scss">


</style>
