import * as React from 'react'

interface SeparatorProps {
  type?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
}

export const Separator: React.FC<SeparatorProps> = ({ type }) => {
  return <div className={`p-${getSeparatorSize({ type })}`} />
}

const getSeparatorSize = (input?: SeparatorProps) => {
  if (!input?.type) return '4'

  switch (input.type) {
    case 'x-large':
      return '10'
    case 'large':
      return '8'
    case 'medium':
      return '6'
    case 'small':
      return '4'
    case 'x-small':
      return '2'
    default:
      return '4'
  }
}
