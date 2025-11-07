<template>
  <div class="main-container">
    <Shop/>
    <Cart/>
  </div>
</template>

<script setup lang="ts">
import Shop from './components/Shop.vue';
import { useCartStore } from './stores/cart';


const cart = useCartStore()
</script>

<style scoped lang="scss">

.main-container {
  background-color: $color-secondary;
  padding: 8px;
  height: 100%;
  @include flex-between(column);
}

</style>
