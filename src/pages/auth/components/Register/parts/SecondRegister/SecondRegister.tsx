import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Image from 'assets/icons'
import SecondRegisterForm from './parts/SecondRegisterForm'
import styles from './SecondRegister.module.scss'

const SecondRegister = () => {
  const history = useHistory()
  return (
    <section className={styles.component}>
      <button className={styles.button} type='button' onClick={() => history.goBack()}>
        <Image.Arrow /> Вернуться назад
      </button>
      <SecondRegisterForm />
    </section>
  )
}

export default SecondRegister
