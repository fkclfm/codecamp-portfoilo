export const getDate = (date) => {
  const data = new Date(date)
  const yy = data.getFullYear()
  const mm = data.getMonth() + 1
  const dd = data.getDate()
  return `${yy}-${mm}-${dd}`
} 