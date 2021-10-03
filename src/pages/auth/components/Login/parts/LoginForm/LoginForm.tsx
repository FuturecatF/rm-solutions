import { useState } from 'react'
import Input from 'ui-kit/Input/Input'
import Label from 'ui-kit/Label/Label'
import * as Image from 'assets/icons'
import Button from 'ui-kit/Button/Button'
import styles from './LoginForm.module.scss'
import { useHistory } from 'react-router-dom'
const LoginForm = () => {
  const history = useHistory()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }
  return (
    <form className={styles.component} noValidate>
      <h2 className={styles.title}>Вход</h2>
      <fieldset className={styles.field}>
        <Label htmlFor='email'>Email</Label>
        <Input className={styles.field__input} placeholder='Email' type='email' id='email' autoFocus={true} />
        <button className={styles.field__rememberBtn}>Забыли пароль?</button>
      </fieldset>
      <fieldset className={styles.field}>
        <Label htmlFor='password'>Пароль</Label>
        <Input
          className={styles.field__input}
          placeholder='Пароль'
          type={isPasswordVisible ? 'text' : 'password'}
          id='password'
        />
        <button className={styles.field__iconBtn} type='button' onClick={handlePasswordVisible}>
          {isPasswordVisible ? <Image.VisibleEye /> : <Image.HiddenEye />}
        </button>
      </fieldset>
      <fieldset className={styles.field}>
        <Button type='submit' className={styles.field__button}>
          Вход
        </Button>
        <Button type='button' className={styles.field__button} onClick={() => history.push('/signup')}>
          Зарегистрироваться
        </Button>
      </fieldset>
      <fieldset className={styles.field}>
        <p className={styles.field__subtitle}>Или войдите с помощью других сервисов</p>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <button className={styles.list__button} type='button'>
              <Image.Google />
            </button>
          </li>
          <li className={styles.list__item}>
            <button className={styles.list__button} type='button'>
              <Image.Facebook />
            </button>
          </li>
          <li className={styles.list__item}>
            <button className={styles.list__button} type='button'>
              <Image.Apple />
            </button>
          </li>
        </ul>
      </fieldset>
    </form>
  )
}

export default LoginForm
