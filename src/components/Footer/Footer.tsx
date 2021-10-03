import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className={styles.component}>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()} ООО «РМ Солюшн»</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to='#'>
            Правила пользования
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='#'>
            Политика конфиденциальности
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='#'>
            Контакты
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
