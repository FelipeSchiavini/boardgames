import * as React from 'react'

interface TypographyProps {
  children: React.ReactNode
}

export const H1: React.FC<TypographyProps> = ({ children }) => {
  return <h1>{children}</h1>
}

export const H2: React.FC<TypographyProps> = ({ children }) => {
  return <h2>{children}</h2>
}

export const H3: React.FC<TypographyProps> = ({ children }) => {
  return <h3 className="font-sans text-base font-bold">{children}</h3>
}

export const Body: React.FC<TypographyProps> = ({ children }) => {
  return <p className="font-sans text-sm">{children}</p>
}

export const BodySecondary: React.FC<TypographyProps> = ({ children }) => {
  return <p>{children}</p>
}

interface CustomTextProps extends TypographyProps {
  className?: string
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  className,
}) => {
  return <span className={`font-sans ${className}`}>{children}</span>
}
