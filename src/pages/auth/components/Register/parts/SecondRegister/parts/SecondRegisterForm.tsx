import { FC, useState, useRef, useEffect } from 'react'
import Label from 'ui-kit/Label/Label'
import Input from 'ui-kit/Input/Input'
import Button from 'ui-kit/Button/Button'
import styles from './SecondRegisterForm.module.scss'
import * as Image from 'assets/icons'
import { useDispatch } from 'react-redux'
import * as api from 'redux/thunk'
type ISecondRegisterForm = {}
const SecondRegisterForm: FC<ISecondRegisterForm> = () => {
  const [isPromptShow, setIsPromptShow] = useState<boolean>(false)
  const promptRef = useRef<HTMLDivElement>(null)

  const handlePromptShow = () => {
    setIsPromptShow((prev) => !prev)
  }

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target !== promptRef.current && isPromptShow) {
        setIsPromptShow(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isPromptShow])

  const dispatch = useDispatch()
  const handleClickTest = () => {
    dispatch(api.getFullOrgData('7707083893'))
  }

  return (
    <form className={styles.component} noValidate>
      <h2 className={styles.title}>Данные организации</h2>
      <fieldset className={styles.field}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Label htmlFor='inn'>ИНН</Label>
            <Input placeholder='_ _ _ _ _ _ _ _ _ _' id='inn' autoFocus={true}></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='bic'>БИК</Label>
            <Input placeholder='_ _ _ _ _ _ _ _ _ _' id='bic'></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='email'>Email организации</Label>
            <Input placeholder='' type='email' id='email'></Input>
            <button className={styles.list__itemIcon} type='button' onClick={handlePromptShow}>
              <Image.Prompt />
            </button>
            <div className={styles.prompt} ref={promptRef} onClick={(e) => e.stopPropagation()}>
              <p className={styles.prompt__title}>
                На указанный Email будет отправлено письмо для подтверждения регистрации
              </p>
            </div>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='tel'>Номер телефона организации</Label>
            <Input placeholder='' type='tel' id='tel'></Input>
          </li>
        </ul>
      </fieldset>
      <fieldset className={styles.field} disabled>
        <ul className={`${styles.list} ${styles.list_second}`}>
          <li className={styles.list__item}>
            <Label htmlFor='org-name'>Наименование организации</Label>
            <Input placeholder='_ _ _ _ _ _ _ _ _ _' id='org-name'></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='ogrn'>ОГРН</Label>
            <Input placeholder='_ _ _ _ _ _ _ _ _ _' id='ogrn'></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='kpp'>КПП</Label>
            <Input placeholder='' id='kpp'></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='okpo'>ОКПО</Label>
            <Input placeholder='' id='okpo'></Input>
          </li>
        </ul>
      </fieldset>
      <fieldset className={styles.field} disabled>
        <p className={styles.field__title}>Реквизиты банка</p>
        <ul className={`${styles.list} ${styles.list_third}`}>
          <li className={styles.list__item}>
            <Label htmlFor='bank-name'>Наименование банка</Label>
            <Input placeholder='' id='bank-name'></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='kor-tax'>Корр.счет</Label>
            <Input placeholder='' id='kor-tax'></Input>
          </li>
          <li className={styles.list__item}>
            <Label htmlFor='bank-address'>Адрес банка</Label>
            <Input placeholder='' id='bank-address'></Input>
          </li>
        </ul>
      </fieldset>
      <Button className={styles.button} type='button' onClick={handleClickTest}>
        Отправить запрос
      </Button>
    </form>
  )
}

export default SecondRegisterForm
