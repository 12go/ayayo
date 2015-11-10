import assign from 'lodash.assign'
import Router from 'ampersand-router'
import routeHandlers from './route_handlers'

const routerConfig = assign({}, routeHandlers, {
  routes: {
    '': 'home',
    'debug': 'debug',
  },
})

export default Router.extend(routerConfig)
