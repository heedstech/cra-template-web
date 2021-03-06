import { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

interface Props {
  exact?: boolean
  component: FC<unknown>
  path: string
}

const PrivateRoute: FC<Props> = ({ exact, component: Component, path }) => {
  const token = localStorage.getItem('access_token')

  const renderComponent = () => {
    if (token) {
      return (
        <Route
          exact={exact ? exact : false}
          path={path}
          component={Component}
        />
      )
    }
    return <Redirect to="/" />
  }

  return renderComponent()
}

export default PrivateRoute
