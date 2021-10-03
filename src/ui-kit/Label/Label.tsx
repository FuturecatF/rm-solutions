import {FC} from 'react'
import styles from './Label.module.scss'
type ILabel = {
  children: string
  className?: string
  htmlFor: string
  
}
const Label: FC<ILabel> = ({children, ...props}) => {
  return (
    <label {...props} className={`${styles.component} ${props.className}`} >
      
      {children}
    </label>
  )
}

export default Label