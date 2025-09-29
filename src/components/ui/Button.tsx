import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 rounded-xl transition-all duration-300 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
