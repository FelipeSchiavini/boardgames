'use client'

import { ReactNode, useState, FC } from 'react'
import { setTimeout } from 'timers'
import { X } from 'lucide-react'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
  size?: 'large' | 'small'
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, size }) => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  if (!isOpen) {
    return null
  }

  const handleClose = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsTransitioning(false)
      onClose?.()
    }, 500)
  }

  return (
    <div className="z-60 fixed inset-0 flex items-center justify-center opacity-100">
      <div
        className={`modal-content z-60 ${
          size === 'small' ? 'h-50 w-50' : 'h-4/6 w-3/4'
        } overflow-hidden rounded-lg bg-gray-50 ${
          isTransitioning ? 'transition-transform' : ''
        }`}
      >
        <div className="pl-5 pr-5 pt-5">
          <div className="flex w-full justify-end">
            <X
              className="cursor-pointer text-lg text-gray-700 hover:text-gray-900"
              onClick={handleClose}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
