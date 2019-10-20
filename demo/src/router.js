import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Hobby from './components/Hobby.vue'
import Introduce from './components/Introduce.vue'
import Finish from './views/Finish.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

  routes: [
      {
        path:'/',
          name:'index',
          component:Index
      },
      {
          path:'/hobby',
          name:'hobby',
          component:Hobby
      },
      {
          path:'/introduce',
          name:'introduce',
          component:Introduce
      },
      {
          path:'/finish',
          name:'finish',
          component:Finish
      },



  ]
})
