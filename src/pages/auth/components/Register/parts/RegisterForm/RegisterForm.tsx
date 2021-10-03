import { useState, useEffect } from 'react'
import Input from 'ui-kit/Input/Input'
import Label from 'ui-kit/Label/Label'
import Button from 'ui-kit/Button/Button'
import styles from './RegisterForm.module.scss'
import * as Image from 'assets/icons'
import { useHistory, Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { checkOrgRepresent, getRegisterData } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import * as I from 'redux/interfaces/AuthState'
import InputMask from 'react-input-mask'
import { getRegisterUser } from 'redux/thunk'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const history = useHistory()
  const { isOrgRepresent } = useSelector((state: I.AuthState) => state.auth)
  /* react hook form */
  const form = useForm({ mode: 'all' })
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    register,
  } = form

  const onSubmit = (data: any) => {
    const registerData: any = {
      userEmail: data.email,
      fullName: data.fullname,
      password: data.password,
      userPhoneNumber: data.tel.match(/\d/g).join(''),
    }
    if (isOrgRepresent) {
      dispatch(getRegisterData(registerData))
      history.push('/signup-second')
    }
    dispatch(getRegisterUser(registerData))
    reset()
  }

  /* показать/скрыть пароль */
  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  /* проверка валидации */
  const [isValidOrg, setIsValidOrg] = useState<boolean>(false)
  const [isValidForm, setIsValidForm] = useState<boolean>(false)

  useEffect(() => {
    if (isOrgRepresent && isValid && isDirty) {
      setIsValidOrg(true)
    } else setIsValidOrg(false)
    if (!isOrgRepresent && isValid && isDirty) {
      setIsValidForm(true)
    } else setIsValidForm(false)
  }, [isOrgRepresent, isValidOrg, isValid, isDirty])

  /* переключение чекбокса */
  const handleCheckbox = () => {
    dispatch(checkOrgRepresent())
  }

  return (
    <form className={styles.component} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className={styles.title}>Регистрация</h2>
      <fieldset className={styles.field}>
        <Label htmlFor='email'>Email</Label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              className={styles.field__input}
              type='email'
              id='email'
              autoFocus={true}
            />
          )}
          rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi }}
        />
        <div className={styles.errors}>
          {errors.email?.type === 'pattern' && <p className={styles.errors__error}>Требуется корректный email</p>}
          {errors.email?.type === 'required' && <p className={styles.errors__error}>Это обязательное поле</p>}
        </div>
        <Label htmlFor='tel'>Номер телефона</Label>
        <Controller
          defaultValue=''
          name='tel'
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputMask
              mask={'+7 (999) 999-99-99'}
              value={value}
              onChange={onChange}
              className={styles.field__input}
              placeholder='+7 (___) ___-__-__'
              type='tel'
              id='tel'
            >
              {(inputProps: any) => <Input {...inputProps} />}
            </InputMask>
          )}
          rules={{
            required: true,
            pattern: /\+\d{1}\s\(\d{3}\)\s\d{3}.\d{2}.\d{2}/g,
          }}
        />

        <div className={styles.errors}>
          {errors.tel?.type === 'pattern' && (
            <p className={styles.errors__error}>Требуется корректный номер телефона</p>
          )}
          {errors.tel?.type === 'required' && <p className={styles.errors__error}>Это обязательное поле</p>}
        </div>
        <Label htmlFor='fullname'>ФИО</Label>
        <Controller
          name='fullname'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <Input value={value} onChange={onChange} className={styles.field__input} type='text' id='fullname' />
          )}
          rules={{
            required: true,
            pattern: /[А-Яа-яё]/g,
            minLength: 5,
          }}
        />
        <div className={styles.errors}>
          {errors.fullname?.type === 'pattern' && <p className={styles.errors__error}>Требуется ФИО кириллицей</p>}
          {errors.fullname?.type === 'required' && <p className={styles.errors__error}>Это обязательное поле</p>}
          {errors.fullname?.type === 'minLength' && (
            <p className={styles.errors__error}>Минимальная длина 5 символов</p>
          )}
        </div>
      </fieldset>
      <fieldset className={styles.field}>
        <Label htmlFor='password'>Пароль</Label>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              className={styles.field__input}
              type={isPasswordVisible ? 'text' : 'password'}
              id='password'
            />
          )}
          rules={{
            required: true,
            minLength: 6,
          }}
        />
        <div className={styles.errors}>
          {errors.password?.type === 'minLength' && (
            <p className={styles.errors__error}>Минимальная длина 6 символов</p>
          )}
          {errors.password?.type === 'required' && <p className={styles.errors__error}>Это обязательное поле</p>}
        </div>
        <button className={styles.field__iconBtn} type='button' onClick={handlePasswordVisible}>
          {isPasswordVisible ? <Image.VisibleEye /> : <Image.HiddenEye />}
        </button>
      </fieldset>
      <fieldset className={`${styles.field} ${styles.field_checkbox}`}>
        <input
          type='checkbox'
          className={styles.checkbox__input}
          id='checkbox'
          checked={isOrgRepresent}
          {...register('checkbox')}
          onClick={handleCheckbox}
        ></input>
        <label className={styles.checkbox__label} htmlFor='checkbox'></label>
        <p className={styles.checkbox__title}>Являюсь представителем организации</p>
      </fieldset>
      <fieldset className={styles.field}>
        {!isOrgRepresent && (
          <Button type='submit' className={styles.field__button} disabled={!isValidForm}>
            Зарегистрироваться
          </Button>
        )}
        {isOrgRepresent && (
          <Button type='submit' className={styles.field__button} disabled={!isValidOrg}>
            Ввести данные организации
          </Button>
        )}
        <Button type='button' className={styles.field__button} onClick={() => history.push('/signin')}>
          Войти
        </Button>
      </fieldset>
      <div className={styles.container}>
        <p className={styles.container__subtitle}>
          Я принимаю условия
          <Link className={styles.container__link} to='#'>
            Пользовательского соглашения
          </Link>
          и даю своё согласие «РМ Солюшн» на обработку моей персональной информации на условиях, определенных{' '}
          <Link className={styles.container__link} to='#'>
            Политикой конфиденциальности.
          </Link>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm
