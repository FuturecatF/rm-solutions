import { FC } from 'react'
import styles from './Input.module.scss'
type IInput = {
  className?: string
  disabled?: boolean
  type?: string
  id?: string
  placeholder?: string
  autoFocus?: boolean
  value?: any
  onChange?: any
  errors?: any
  ref?: any
}
const Input: FC<IInput> = ({ ...props }) => {
  return <input {...props} className={`${styles.component} ${props.className}`}></input>
}

export default Input
