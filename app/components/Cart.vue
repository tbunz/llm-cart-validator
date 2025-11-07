<template>
  <div class="cart-container">
    <div v-if="cart?.totalItems">
        <div v-for="item in cart.items" :key="item.productId">
            <CartItem :product-id="item.productId" :qty="item.quantity"/>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cart = useCartStore()

</script>

<style scoped lang="scss">
.cart-container {
    height: 100%;
    width: 32%;
    background-color: $color-primary;
    border: 2px solid;
    padding: 8px;
}

</style>
