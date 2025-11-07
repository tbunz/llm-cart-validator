<template>
  <div 
    ref="card"
    class="product-container" 
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
    @click="handleClick"
  >
    <div><span class="bold">ID: </span>{{ product?.id }}</div>
    <div><span class="bold">Name: </span>{{ product?.name }}</div>
    <div><span class="bold">Brand: </span>{{ product?.brand }}</div>
    <div><span class="bold">Cost: </span>{{ product?.price }}</div>
    <div><span class="bold">Category: </span>{{ product?.category }}</div>

    <span ref="label" class="floating-label">Add to cart</span>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import type { Product } from '~/types';

const props = defineProps<{
  product: Product
}>()

const cart = useCartStore()
const card = ref<HTMLElement | null>(null)
const label = ref<HTMLElement | null>(null)

function handleClick() {
  cart.addItem(props.product?.id)
}

const { $gsap } = useNuxtApp()

function handleMouseEnter() {
  if (!card.value || !label.value) return

  $gsap.to(card.value, {
    duration: 0.25,
    scale: 0.97,
    borderWidth: 3,
    borderColor: '#fff',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5)',
    ease: 'power3.out',
    overwrite: 'auto'
  })

  $gsap.to(label.value, {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: 'power3.out',
    overwrite: 'auto'
  })
}

// Hide label + reset card
function handleMouseLeave() {
  if (!card.value || !label.value) return

  $gsap.killTweensOf(label.value)

  $gsap.to(card.value, {
    duration: 0.25,
    scale: 1,
    borderWidth: 2,
    borderColor: '#000',
    boxShadow: 'none',
    ease: 'power3.inOut'
  })

  $gsap.to(label.value, {
    opacity: 0,
    scale: 0.95,
    duration: 0.2,
    ease: 'power3.inOut',
    overwrite: 'auto',
    onComplete() {
      if (!label.value) return
      $gsap.set(label.value, { opacity: 0 })
    }
  })
}

// Move the floating label to follow cursor
function handleMouseMove(e: MouseEvent) {
  if (!card.value || !label.value) return

  const rect = card.value.getBoundingClientRect()
  const x = e.clientX - rect.left + 13
  const y = e.clientY - rect.top + 20

  $gsap.to(label.value, {
    x,
    y,
    duration: 0.2,
    ease: 'power2.out'
  })
}
</script>

<style scoped lang="scss">

.product-container {
    padding: 8px;
    height: 100%;;
    border: 2px solid;
    background-color: $color-primary;
    cursor: pointer;

    .bold {
      font-weight: 600;
    }

    .floating-label {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.95);
      font-size: 0.85rem;
      font-weight: 600;
      color: white;
      background: rgba(0, 0, 0, 0.7);
      padding: 4px 8px;
      border-radius: 6px;
      white-space: nowrap;
      user-select: none;
    }
}

</style>
