import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref(null)
  let observer = null
  const options = { threshold: 0.1 }

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (elementRef.value) observer.unobserve(elementRef.value)
      }
    }, options)

    if (elementRef.value) observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return {
    isVisible,
    elementRef,
  }
}
