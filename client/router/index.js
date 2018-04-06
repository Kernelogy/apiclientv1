import Vue from 'vue'
import Router from 'vue-router'
// import menuModule from 'vuex-store/modules/menu'
Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Signin',
      path: '/',
      component: require('../views/auth/Signin'),
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'Signup',
      path: '/Signup',
      component: require('../views/auth/Signup'),
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'Dashboard',
      path: '/Dashboard',
      component: require('../views/dashboard'),
      meta: {
        requiresAuth: true
      }
    }
    // {
    //   name: 'Dashboard',
    //   path: '/Dashboard',
    //   component: require('../views/dashboard')
    // },
    // ...generateRoutesFromMenu(menuModule.state.items),
    // {
    //   path: '*',
    //   redirect: '/',
    //   meta: {
    //     requiresAuth: true
    //   }
    // }
  ]
})

// Menu should have 2 levels.
// function generateRoutesFromMenu (menu = [], routes = []) {
//   for (let i = 0, l = menu.length; i < l; i++) {
//     let item = menu[i]
//     if (item.path) {
//       routes.push(item)
//     }
//     if (!item.component) {
//       generateRoutesFromMenu(item.children, routes)
//     }
//   }
//   return routes
// }
