<template>
  <div class="product-container" @click="handleClick">
    <div>ID: {{ product?.id }}</div>
    <div>{{ product?.name }}</div>
    <div>{{ product?.category }}</div>
    <div>Price: {{ product?.price }}</div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import type { Product } from '~/types';

const props = defineProps<{
  product: Product
}>()

const cart = useCartStore()

function handleClick() {
    cart.addItem(props.product?.id)
}

</script>

<style scoped lang="scss">

.product-container {
    padding: 8px;
    height: 100%;;
    border: 2px solid;
    background-color: $color-primary;
    cursor: pointer;
}

</style>
