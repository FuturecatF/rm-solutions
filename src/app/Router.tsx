import { Switch, Route, Redirect } from 'react-router-dom'
import Login from 'pages/auth/components/Login/Login'
import Register from 'pages/auth/components/Register/Register'
import ProtectedRoute from './ProtectedRoute'
import SecondRegister from 'pages/auth/components/Register/parts/SecondRegister/SecondRegister'
import HomePage from 'pages/home/HomePage'
import { useSelector } from 'react-redux'
import * as I from 'redux/interfaces/AuthState'
const Router = () => {
  /* второй шаг регистрации тоже можно через ProtectedRoute показывать, 
  просто другое значение туда передавать из редакс*/
  const { isOrgRepresent } = useSelector((state: I.AuthState) => state.auth)
  return (
    <Switch>
      <Route path='/signin' component={Login} />
      <Route path='/signup' component={Register} />
      <ProtectedRoute path='/signup-second' isLogged={isOrgRepresent} component={SecondRegister} />
      <ProtectedRoute path='/' isLogged={false} component={HomePage} />
      <Route exact path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  )
}

export default Router
