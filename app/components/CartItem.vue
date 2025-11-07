<template>
  <div class="cart-item-container">
    <div class="name-brand">
        <span>{{ product?.name }}</span>
        <span class="brand">({{ product?.brand }})</span>
    </div>
    <div>
        {{ qty }} x  ${{ product?.price }}
    </div>
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
    @include flex-between;

    .name-brand {
        @include flex-between;
        align-items: baseline;
        gap: 4px;

        .brand {
            font-size: 13px;
        }
    }
}

</style>
