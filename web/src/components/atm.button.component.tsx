import { LucideIcon } from 'lucide-react'
import { ReactNode, FunctionComponent } from 'react'

interface ButtonProps {
  children: ReactNode
  icon?: LucideIcon
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  icon: Icon,
}) => {
  return (
    <div className="flex cursor-pointer justify-center gap-5 rounded-lg bg-green-600 p-2 align-middle hover:bg-green-500">
      {Icon && <Icon color="#FFF" />}
      <p className="text-center text-white">{children}</p>
    </div>
  )
}
