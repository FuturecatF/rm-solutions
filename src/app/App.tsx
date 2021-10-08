
import { Header, Footer } from 'components'

import Router from './Router'

import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles['component']}>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
