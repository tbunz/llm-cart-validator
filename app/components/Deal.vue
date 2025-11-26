<template>
  <div class="deal">
    <div>{{ deal }}</div>
    <button class="validate" @click="validate">Validate</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  deal: string,
}>()

const { data, pending, error, execute } = useFetch('/api/validate', {
  method: 'POST',
  immediate: false, 
  body: {
    message: props.deal
  }
})

function validate() {
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
        &:hover {
            color: #fff;
        }
    }
}
</style>
