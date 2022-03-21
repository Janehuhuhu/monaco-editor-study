import Home from '../pages/01-home/index'
import Start from '../pages/02-start/index'
import createConfig from '../pages/03-create-config/index'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/start',
    component: Start
  },
  {
    path: '/create-config',
    component: createConfig
  }
]

export default routes