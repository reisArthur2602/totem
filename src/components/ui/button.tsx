import { clsx } from 'clsx'
import { type ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'secondary' | 'primary'
  disabled?: boolean
}
export const Button = ({
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        variant == 'primary'
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground',
        disabled && 'opacity-50',
        'px-12 py-5  rounded-xl cursor-pointer',
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
