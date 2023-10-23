const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
})
export const formatPrice = (val) => {
  return VND.format(val)
}
