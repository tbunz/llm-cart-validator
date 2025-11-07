<template>
  <div class="product-container">
    <div>ID: {{ product?.id }}</div>
    <div>{{ product?.name }}</div>
    <div>{{ product?.category }}</div>
    <div>Price: {{ product?.price }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

const props = defineProps<{
  product: Product
}>()

</script>

<style scoped lang="scss">

.product-container {
    padding: 8px;
    height: 100%;;
    border: 2px solid;
    background-color: $color-primary;
}

</style>
