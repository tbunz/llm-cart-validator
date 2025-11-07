// composables/useProduct.ts
import { computed } from 'vue'
import type { Product } from '~/types'
import { PRODUCTS } from '~/data'

export function useProduct(productId: number) {
  const product = computed<Product | undefined>(() =>
    PRODUCTS.find((p) => p.id === productId)
  )

  return {
    product,
  }
}
