<template>
  <div class="cart-container">
    <Shop/>
  </div>
</template>

<script setup lang="ts">
import Shop from './components/Shop.vue';

</script>

<style scoped lang="scss">

.cart-container {
  background-color: $color-secondary;
  padding: 8px;
  height: 100%;
}

</style>
