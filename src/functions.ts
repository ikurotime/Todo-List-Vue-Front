export const getTodos = async (user: string) => {
  const res = await fetch(`http://localhost:8000/get/${user}`)
  return res.json()
}
