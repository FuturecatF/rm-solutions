import { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'

type IProtectedRoute = {
  component: React.FunctionComponent
  isLogged: boolean
  path: string
}

const ProtectedRoute: FC<IProtectedRoute> = ({ component: Component, ...props }) => {
  return <Route>{() => (props.isLogged ? <Component {...props} /> : <Redirect to='/signin' />)}</Route>
}

export default ProtectedRoute
