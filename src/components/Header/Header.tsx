/* в начале библиотеки */
import React from 'react'
import cl from 'classnames'
/* тут например хуки идут кастомные */
/* ................................ */
/* тут идут компоненты */

import * as Image from './images'
/* стили последними идут */
import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
  /* это для примера  */
  const isActive = false

  const headerClassname = cl(styles['header'], {
    [styles['header_active']]: isActive,
  })

  return (
    <header className={headerClassname}>
      <span className={cl(styles['header__logo'])}>
        <Image.Logo />
      </span>
    </header>
  )
}
