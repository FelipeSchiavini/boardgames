'use client'

import { Product } from '@/app/data/server/get-products'
import React, { useState } from 'react'
import { Pagination } from './pagination.component'
import { ProductCard } from './product.component'
import { Separator } from './utils.component'

interface ProductListProps {
  products: Product[]
}
const productsPerPage = 2

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [page, setPage] = useState<number>(1)

  return (
    <>
      <div className="container mx-auto p-3">
        <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {products
            .slice(
              page * productsPerPage - productsPerPage,
              page * productsPerPage,
            )
            .map((product) => {
              return (
                <div
                  className="flex items-center justify-center"
                  key={product.id}
                >
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    priceInCash={product.price}
                    productUrl={product.picture}
                  />
                </div>
              )
            })}
        </div>
      </div>
      <Separator />
      <div className="flex justify-center">
        <Pagination
          numberOfPages={Math.ceil(products.length / productsPerPage)}
          activePage={page}
          updatePage={setPage}
        />
      </div>
    </>
  )
}
