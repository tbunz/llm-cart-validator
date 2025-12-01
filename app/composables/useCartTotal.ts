// composables/useCartTotal.ts
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useProduct } from '~/composables/useProduct'

export function useCartTotal() {
  const cart = useCartStore()

  const totalCost = computed(() =>
    cart.items.reduce((sum, item) => {
      const { product } = useProduct(item.productId)
      const price = product.value?.price ?? 0

      return sum + price * item.quantity
    }, 0)
  )

  return {
    totalCost,
  }
}
