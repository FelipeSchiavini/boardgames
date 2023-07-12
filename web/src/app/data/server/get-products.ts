export type Product = {
  description: string
  id: string
  name: string
  picture: string
  price: string
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3333/products', {
    next: { revalidate: 30 },
  })
  return res.json() as Promise<Product[]>
}
