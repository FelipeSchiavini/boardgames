'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from './atm.button.component'
import { Body, H3 } from './atm.typography.component'
import { Separator } from './utils.component'
import * as React from 'react'

interface ProductCardProps {
  id: string
  name: string
  description: string
  priceInCash: string
  productUrl: string
  onDetailsClick: () => void
  onAddToCartClick: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  priceInCash,
  productUrl,
  onDetailsClick,
  onAddToCartClick,
}) => {
  return (
    <div className="mt-5 flex h-[580px] w-80 cursor-pointer flex-col justify-between rounded-lg bg-gray-600 p-4">
      <div>
        <img src={productUrl} className="rounded-md" alt="game" />
        <Separator type="x-small" />
        <div className="h-10">
          <H3>{name}</H3>
        </div>
        <Separator type="x-small" />
        <Body>{`${description.substring(0, 100)}`}</Body>
      </div>
      <div className="m-0 flex justify-center ">
        <H3 color="secondary">R$ {priceInCash}</H3>
      </div>
      <Button icon={ShoppingCart} type="primary" onClick={onAddToCartClick}>
        + Adicionar ao carrinho
      </Button>
      <Button type="secondary" onClick={onDetailsClick}>
        {' '}
        Detalhes{' '}
      </Button>
    </div>
  )
}
