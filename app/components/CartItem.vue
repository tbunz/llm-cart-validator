<template>
  <div @click="cart.removeItem(productId)" class="cart-item-container">
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
const props = defineProps<{
  productId: number,
  qty: number
}>()

const { product } = useProduct(props.productId)

const cart = useCartStore()

</script>

<style scoped lang="scss">

.cart-item-container {
    @include flex-between;
    cursor: pointer;
    margin: 4px 0;

    .name-brand {
        @include flex-between;
        align-items: baseline;
        gap: 4px;

        .brand {
            font-size: 13px;
        }
    }

    &:hover {
        color: red;
    }
}

</style>
