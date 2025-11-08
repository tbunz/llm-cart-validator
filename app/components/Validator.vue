<template>
  <div class="validator-container">
    <div class="deal-validator">Deal Criteria Validator</div>
    <div class="deals-container">
      <div class="deal-wrap" v-for="deal in deals" :key="deal">
        <Deal :deal="deal"/>
      </div>
      <CustomDeal/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEALS } from '~/data';

const deals = DEALS

</script>

<style scoped lang="scss">
.validator-container {
    flex: 1;
    height: 100%;
    background-color: $color-primary;
    border: 2px solid;
    padding: 8px;

    .deal-validator {
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .deals-container {
      display: flex;
      gap: 8px;
      
      .deal-wrap {
        width: 33%;
        height: 100%;
      }
    }
}

</style>
