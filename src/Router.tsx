import './index.css'
import reactLogo from './assets/react.svg'
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom'
import App from './pages/App'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'login',
    element: <Login/>,
    errorElement: <ErrorPage/>, 
  }
])
function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router;
