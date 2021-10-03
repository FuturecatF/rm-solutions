import React from 'react'
import styles from './Register.module.scss'
import RegisterForm from './parts/RegisterForm/RegisterForm'
const Register = () => {
  return (
    <section className={styles.component}>
      <RegisterForm />
    </section>
  )
}

export default Register
