<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <!-- Circle background -->
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      :stroke="color" 
      :stroke-width="strokeWidth" 
      fill="none"
    />
    
    <!-- Question mark -->
    <path 
      d="M12 17v-1" 
      :stroke="color" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round"
    />
    <path 
      d="M12 13.5v-0.5c0-1 0.5-1.5 1.5-2.5 0.8-0.8 1.5-1.5 1.5-2.5 0-1.7-1.3-3-3-3s-3 1.3-3 3" 
      :stroke="color" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  strokeWidth: {
    type: [String, Number],
    default: 2
  },
  className: {
    type: String,
    default: ''
  }
})
</script>