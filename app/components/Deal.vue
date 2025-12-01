<template>
  <div class="deal">
    <div>{{ deal }}</div>
    <button class="validate" :class="{ pending: pending }" @click="handleValidate" :disabled="pending">{{ pending ? "Loading..." : "Validate" }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  deal: string,
}>()


const cart = useCartStore()
const { pending, validationText, validateDeal } = useValidation()

const handleValidate = async () => {
  await validateDeal(props.deal, cart.items)
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
