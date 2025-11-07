<template>
  <div class="cart-item-container">
    <div>{{ product?.name }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

const props = defineProps<{
  productId: number,
  qty: number
}>()

const { product } = useProduct(props.productId)

</script>

<style scoped lang="scss">

.cart-item-container {
    
}

</style>
