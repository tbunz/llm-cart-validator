export const useValidation = () => {
  const combinedMessage = ref('')

  const { data, pending, error, execute, refresh } = useFetch('/api/validate', {
    method: 'POST',
    immediate: false,
    body: computed(() => ({
      message: combinedMessage.value
    })),

  })

  // Extract text from response
  const validationText = computed(() => {
    const textBlock = data.value?.content?.find(block => 'text' in block)
    return textBlock?.text || ''
  })

  const validateDeal = async (deal: string, cartItems: any[]) => {
    // Fetch product info for each item
    const itemsWithProductInfo = await Promise.all(
      cartItems.map(async (itemIdQty) => {
        const { product } = useProduct(itemIdQty.productId)
        return {
          ...product.value,
          qty: itemIdQty.quantity
        }
      })
    )

    // Combine deal and cart info
    const cartItemsString = JSON.stringify(itemsWithProductInfo)
    combinedMessage.value = `Deal:\n${deal}\n\nCart Items:\n${cartItemsString}`

    // Execute the API call
    await execute()
  }

  return {
    data,
    pending,
    error,
    validationText,
    validateDeal,
    refresh
  }
}