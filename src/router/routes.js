import Home from '../pages/01-home/index'
import Start from '../pages/02-start/index'
import createConfig from '../pages/03-create-config/index'
import monacoVue from '../pages/04-monaco-vue/index'

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
  },
  {
    path: '/monaco-vue',
    component: monacoVue
  },
]

export default routes