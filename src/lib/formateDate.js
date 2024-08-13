export const getTodayDate = () => {
  const [year, month, day] = [
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate(),
  ]
  return [year, month, day].map((n) => n.toString().padStart(2, '0')).join('-')
}
