import React from 'react'
import styles from './Header.module.scss'
import * as Image from './images'
const Header = () => {
    return (
        <header className={styles.component}>
            <span className={styles.logo}>
                <Image.Logo />
            </span>
        </header>
    )
}

export default Header
