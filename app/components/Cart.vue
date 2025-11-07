<template>
  <div class="cart-container">
    <div class="cart">CART</div>
    <div v-if="cart?.totalItems">
        <div v-for="item in cart.items" :key="item.productId">
            <CartItem :product-id="item.productId" :qty="item.quantity"/>
        </div>
    </div>
    <div class="total">
      <span>TOTAL</span>
      <span>${{ totalCost ? totalCost : 0 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const cart = useCartStore()

const { totalCost } = useCartTotal()
</script>

<style scoped lang="scss">
.cart-container {
    height: 100%;
    width: 32%;
    background-color: $color-primary;
    border: 2px solid;
    padding: 8px;

    .cart {
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .total {
      margin-top: 16px;
      padding-top: 4px;
      text-transform: uppercase;
      font-weight: 600;
      border-top: 2px solid;
      @include flex-between;
    }
}
</style>
