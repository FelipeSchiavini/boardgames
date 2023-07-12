'use server'

export const getProducts = async (): Promise<string[]> => {
  const res = await fetch('https://localhost:3333/products')
  return res.json()
}
