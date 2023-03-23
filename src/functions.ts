export const getTodos = async (user: string) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get/${user}`)
  return res.json()
}
