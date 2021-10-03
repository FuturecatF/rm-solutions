import styles from './App.module.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from './Router'
const App = () => {
  return (
    <div className={styles.component}>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
