import Vue from 'vue'
import VueRouter from 'vue-router'

import userLayout from './../pages/user'
import userLogin from './../pages/user/login/Login'
import userHome from './../pages/user/home/home'

// import config from "../config";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes:[
    {
      path: '/user',
      component: userLayout,
      children: [
        {path: 'home', component: userHome},
        {path: 'login', component: userLogin},
        {path: '/user',redirect: '/user/home'},
      ]
    },
    {//默认路由
      path: '/',
      redirect: '/user'
    }
  ]
});
/*
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  if(to.path === '/admin/login' || to.path.includes('/user')){
    next();
  }else{
    config.getCache('adminId') ? next() : next('/admin/login')
  }
});*/
export default router;
