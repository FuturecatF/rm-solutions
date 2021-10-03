import React from 'react'
import styles from './Login.module.scss'
import LoginForm from './parts/LoginForm/LoginForm'
const Login = () => {
    return (
        <section className={styles.component}>
           <LoginForm />
        </section>
    )
}

export default Login
