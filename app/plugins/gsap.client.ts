import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap
    }
  }
})
