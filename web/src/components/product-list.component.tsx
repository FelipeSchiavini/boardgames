'use client'

import { Product } from '@/app/data/server/get-products'
import React, { useState } from 'react'
import { Pagination } from './pagination.component'
import { ProductCard } from './product.component'
import { Separator } from './utils.component'
import { Modal } from './atm.modal.component'
import { Body, H1, H2, H3 } from './atm.typography.component'
import { Button } from './atm.button.component'

interface ProductListProps {
  products: Product[]
}
const productsPerPage = 2

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [page, setPage] = useState<number>(1)
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false)
  const [openAddToCartModal, setOpenAddToCartDetailsModal] =
    useState<boolean>(false)

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>()
  console.log(
    '🚀 ~ file: product-list.component.tsx:18 ~ openModal:',
    openDetailsModal,
  )

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
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    priceInCash={product.price}
                    productUrl={product.picture}
                    onDetailsClick={() => {
                      setSelectedProduct(product)
                      setOpenDetailsModal(true)
                    }}
                    onAddToCartClick={() => {
                      setSelectedProduct(product)
                      setOpenAddToCartDetailsModal(true)
                    }}
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

      <Modal
        isOpen={openDetailsModal}
        onClose={() => setOpenDetailsModal(false)}
      >
        <>
          {selectedProduct && (
            <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2">
              <div className="w-full flex-col items-center justify-center">
                <H1>{selectedProduct.name}</H1>
                <img src={selectedProduct.picture} className="w-2/4"></img>
              </div>
              <div>
                <Button> Adicionar ao Carrinho</Button>
              </div>
            </div>
          )}
        </>
      </Modal>

      <Modal
        size="small"
        isOpen={openAddToCartModal}
        onClose={() => setOpenAddToCartDetailsModal(false)}
      >
        {selectedProduct && (
          <>
            <H3>{selectedProduct.name}</H3>
            <img src={selectedProduct.picture} className="w-2/4"></img>
            <Separator />
            <Body>{`Você deseja adicionar ${selectedProduct.name} ao carrinho?`}</Body>
            <Body>quantidade:</Body>
            <Button> Adicionar ao Carrinho</Button>
            <Separator />
          </>
        )}
      </Modal>
    </>
  )
}
