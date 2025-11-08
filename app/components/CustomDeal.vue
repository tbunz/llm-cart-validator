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
    <button class="validate">Validate</button>
  </div>
</template>

<script setup lang="ts">
const newDeal = ref('')
const textarea = ref<HTMLTextAreaElement | null>(null)

const autoResize = () => {
  const el = textarea.value
  if (el) {
    el.style.height = 'auto' // reset height
    el.style.height = el.scrollHeight + 'px' // set new height based on content
  }
}

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
        &:hover {
            color: #fff;
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
