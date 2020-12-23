import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from "axios"

const base = axios.create({
  baseURL : 'http://localhost:3000'
})

Vue.prototype.$http = base;
Vue.config.productionTip = false;



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/About.vue'),
    
  },
  {
    path: '/categorias',
    name: 'Categorias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "categorias" */ '../views/Categorias.vue'),
    
  },
 
  {
    path: '/articulos',
    name: 'Articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "articulos" */ '../views/Articulos.vue'),
    
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "usuarios" */ '../views/Usuarios.vue'),
    
    

  },
  {
    path: '/servicio',
    name: 'Servicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "usuarios" */ '../views/Servicio.vue'),
    

  },
  {
    path: '/quienessomos',
    name: 'Quienessomos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "usuarios" */ '../views/Quienessomos.vue'),
  },
    {
      path: '/casosexito',
      name: 'CasosExito',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "usuarios" */ '../views/CasosExito.vue'),
    

  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
router.beforeEach( (to, from,next) => {
  //Si para donde voy requiere autenticación
  if(to.matched.some ( destinoRequiereAut => destinoRequiereAut.meta.requiresAuth ))
  {
    //Pregunto si hay un token activo
    if(localStorage.getItem('token'))
    {
      next();
    } 
    else
    {
      next({
        path: '/'
      })
    }
  }
  else
  {
    next();
  }
}

)

