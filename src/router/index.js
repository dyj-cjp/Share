import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Profile=()=>import ("../views/profile/Profile")
const Scan=()=>import ("../views/scan/Scan")
const Send=()=>import ("../views/send/Send")
const Login=()=>import ('../views/login/Login')
const Sign=()=>import ('../views/sign/Sign')

const routes = [
  {
    path:'',
    redirect:'/send'
  },
  {
    path:'/scan',
    component:Scan
  },
  {
    path:'/send',
    component:Send
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
