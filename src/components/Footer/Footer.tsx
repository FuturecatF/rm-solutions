import React from 'react'
import { Link } from 'react-router-dom'
import cl from 'classnames'

import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => (
  <footer className={cl(styles['footer'])}>
    <p className={cl(styles['footer__copyright'])}>
      &copy; {new Date().getFullYear()} ООО «РМ Солюшн»
    </p>
    <ul className={cl(styles['footer__list'])}>
      <li className={cl(styles['footer__item'])}>
        <Link className={cl(styles['footer__link'])} to='#'>
          Правила пользования
        </Link>
      </li>
      <li className={cl(styles['footer__item'])}>
        <Link className={cl(styles['footer__link'])} to='#'>
          Политика конфиденциальности
        </Link>
      </li>
      <li className={cl(styles['footer__item'])}>
        <Link className={cl(styles['footer__link'])} to='#'>
          Контакты
        </Link>
      </li>
    </ul>
  </footer>
)
