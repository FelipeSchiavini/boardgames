import { LucideIcon } from 'lucide-react'
import { type } from 'os'
import { ReactNode, FunctionComponent } from 'react'

interface ButtonProps {
  children: ReactNode
  icon?: LucideIcon
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  icon: Icon,
  type,
  onClick,
}) => {
  const backgroundColor =
    type === 'secondary' ? 'border-gray-600' : 'bg-green-600'

  const borderColor = type === 'secondary' ? 'border-green-500' : ''

  const hoverColor =
    type === 'secondary' ? 'hover:bg-gray-900' : 'hover:bg-green-500'

  const border = type === 'secondary' ? 'border' : ''
  return (
    <div
      className={`flex cursor-pointer justify-center gap-5 ${backgroundColor} ${border} rounded-lg ${borderColor} p-2 align-middle ${hoverColor}`}
      onClick={onClick}
    >
      {Icon && <Icon color="#FFF" />}
      <p className="text-center text-white">{children}</p>
    </div>
  )
}
