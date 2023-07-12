'use client'

import { create } from 'zustand'

export const useProductsStore = create((set) => ({
  products: [],
  getProducts: async () => {
    const products = await fetch('http://localhost:3000/products')
    set(() => products)
  },
}))
