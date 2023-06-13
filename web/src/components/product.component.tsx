'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from './atm.button.component'
import { Body, CustomText, H3 } from './atm.typography.component'
import { Separator } from './utils.component'
import * as React from 'react'

interface ProductCardProps {
  name: string
  description: string
  priceInCash: string
  paymentInInstallments: string
  numberOfInstallments: number
  productUrl: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  priceInCash,
  paymentInInstallments,
  numberOfInstallments,
  productUrl,
}) => {
  return (
    <div className="flex h-[550px] w-80 cursor-pointer flex-col justify-between rounded-lg bg-gray-600 p-4 mt-5 hover:bg-gray-700">
      <div>
        <img src={productUrl} className="rounded-md" alt="game" />
        <Separator type="x-small" />
        <H3>{name}</H3>
        <Separator type="x-small" />
        <Body>{`${description.substring(0, 100)}`}</Body>
        <Separator type="x-small" />
        <Body>
          <CustomText className="text-base font-bold">
            R$ {priceInCash}
          </CustomText>{' '}
          à vista ou {numberOfInstallments}x de{' '}
          <CustomText className="text-base font-bold">
            R$ {paymentInInstallments}
          </CustomText>
        </Body>
      </div>
      <Button icon={ShoppingCart}> + Adicionar ao carrinho </Button>
    </div>
  )
}
