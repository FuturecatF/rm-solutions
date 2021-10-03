import { FC } from 'react'
import styles from './Button.module.scss'
type IButton = {
  children: string
  className?: string
  onClick?: () => void
  type: 'submit' | 'reset' | 'button'
  disabled?: boolean
  onSubmit?: any
}
const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button {...props} className={`${styles.component} ${props.className}`}>
      {children}
    </button>
  )
}

export default Button
