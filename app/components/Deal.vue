<template>
  <div class="deal">
    <div>{{ deal }}</div>
    <button class="validate" :class="{ pending: pending }" @click="validate">{{ pending ? "Loading..." : "Validate" }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  deal: string,
}>()

const combinedMessage = ref('')

const { data, pending, error, execute } = useFetch('/api/validate', {
  method: 'POST',
  immediate: false, 
  body: computed(() => ({
    message: combinedMessage.value
  }))
})

watchEffect(() => {
  const textBlock = data.value?.content?.find(block => 'text' in block)
  console.log(textBlock?.text)
})

const cart = useCartStore()

async function validate() {
  // Fetch product info for each item ID
  const itemsWithProductInfo = await Promise.all(
    cart.items.map(async (itemIdQty) => {
      const { product } = useProduct(itemIdQty.productId)
      return {
        ...product.value, 
        "qty": itemIdQty.quantity
      }
    })
  )
  
  // Stringify and combine with props.deal
  const cartItemsString = JSON.stringify(itemsWithProductInfo)
  combinedMessage.value = `Deal:\n${props.deal}\n\nCart Items:\n${cartItemsString}`
  
  console.log(combinedMessage.value)
  
  execute()
}
</script>

<style scoped lang="scss">
.deal {
    border: 2px solid;
    padding: 8px;
    gap: 12px;
    @include flex-between(column);

    .validate {
        border: 2px solid;
        cursor: pointer;
        background-color: $color-secondary;
        &:hover:not(.pending) {
            color: #fff;
        }

        &.pending {
          cursor: not-allowed;
          opacity: 0.6;
          animation: pulse 1.5s ease-in-out infinite;
        }
    }
}

@keyframes pulse {
    0%, 100% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
}
</style>
