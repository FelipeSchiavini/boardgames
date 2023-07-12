'use client'
import React from 'react'
import { IconButton, Typography } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface PaginationProps {
  numberOfPages: number
  activePage: number
  updatePage: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  numberOfPages,
  activePage,
  updatePage,
}) => {
  const next = () => {
    if (activePage === numberOfPages) return

    updatePage(activePage + 1)
  }

  const prev = () => {
    if (activePage === 1) return

    updatePage(activePage - 1)
  }

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        color="white"
        onClick={prev}
        disabled={activePage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal text-gray-100">
        Página <strong className="text-gray-100">{activePage}</strong> of{' '}
        <strong className="text-gray-100">{numberOfPages}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        color="white"
        onClick={next}
        disabled={activePage === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  )
}
