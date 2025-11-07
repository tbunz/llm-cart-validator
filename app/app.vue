<template>
  <div class="main-container">
    <Shop/>
    <div class="bottom-container">
      <Cart/>
      <Validator/>
    </div>

  </div>
</template>

<script setup lang="ts">
import Shop from './components/Shop.vue';
import Validator from './components/Validator.vue';
</script>

<style scoped lang="scss">

.main-container {
  background-color: $color-secondary;
  padding: 8px;
  height: 100%;
  @include flex-between(column);

  .bottom-container {
    height: 100%;
    width: 100%;
    margin-top: 8px;
    @include flex-between;
    gap: 8px;
  }
}

</style>
