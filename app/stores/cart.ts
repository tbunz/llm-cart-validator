import { defineStore } from 'pinia'
import type { CartItem } from '~/types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    hasItem: (state) => {
      return (productId: number) => state.items.some((i) => i.productId === productId)
    },
  },

  actions: {
    addItem(productId: number, quantity = 1) {
      const existing = this.items.find((i) => i.productId === productId)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ productId, quantity })
      }
    },

    removeItem(productId: number) {
      this.items = this.items.filter((i) => i.productId !== productId)
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((i) => i.productId === productId)
      if (item) {
        if (quantity <= 0) this.removeItem(productId)
        else item.quantity = quantity
      }
    },

    clearCart() {
      this.items = []
    },
  },
})
