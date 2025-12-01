<template>
  <div class="custom-deal">
    <textarea
      ref="textarea"
      v-model="newDeal"
      placeholder="Type your deal..."
      rows="1"
      @input="autoResize"
      class="auto-textarea"
    />
    <button 
      class="validate"
      :class="{ pending: pending, empty: !newDeal.trim()}" 
      @click="handleValidate"
      :disabled="pending || !newDeal.trim()"
    >
      {{ pending ? "Loading..." : "Validate" }}
    </button>
  </div>
</template>

<script setup lang="ts">
const newDeal = ref('')
const textarea = ref<HTMLTextAreaElement | null>(null)

const cart = useCartStore()
const { pending, validationText, error, validateDeal } = useValidation()
const setMessage = inject<(msg: string) => void>('setMessage')

const autoResize = () => {
  const el = textarea.value
  if (el) {
    el.style.height = 'auto' // reset height
    el.style.height = el.scrollHeight + 'px' // set new height based on content
  }
}

const handleValidate = async () => {
  if (!newDeal.value.trim()) return
  
  await validateDeal(newDeal.value, cart.items)
}

watch(validationText, (newText) => {
  if (newText && setMessage) {
    setMessage("RESPONSE: \n\n" + newText)
  }
})

onMounted(() => {
  nextTick(autoResize)
})
</script>

<style scoped lang="scss">
.custom-deal {
    width: 33%;
    border: 2px solid;
    padding: 8px;
    gap: 12px;
    @include flex-between(column);

    .validate {
        border: 2px solid;
        cursor: pointer;
        background-color: $color-secondary;

        &:hover:not(.pending):not(.empty) {
            color: #fff;
        }

        &.pending {
          cursor: not-allowed;
          opacity: 0.6;
          animation: pulse 1.5s ease-in-out infinite;
        }

        &.empty {
          cursor: not-allowed;
          opacity: 0.5;
        }
    }

    .auto-textarea {
        width: 100%;
        resize: none; 
        overflow: hidden; 
        line-height: 1.5;
        padding: 6px;
        font-size: 1rem;
    }
}
</style>
