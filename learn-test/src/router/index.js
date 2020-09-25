import Vue from 'vue'
import VueRouter from 'vue-router';

const WebGl=()=>import ('views/webGL')
const Parent=()=>import ('views/$attrs_test/Parent')
const showComponents=()=>import('views/is-components/showComponents')
const Lodash=()=>import('views/learn_lodash/basic')

// 重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter)
const routes=[
  {
    path:"",
    redirect:'/home'
  },
  {
    path:'/home',
    component:Parent,
    meta:{
      title:"首页"
    }
  },
  {
    path:'/showComponents',
    component:showComponents,
    meta:{
      title:"动态组件"
    }
  },
  {
    path:'/WebGl',
    component:WebGl,
    meta:{
      title:"WebGl"
    }
  },
  {
    path:'/Lodash',
    component:Lodash,
    meta:{
      title:"Lodash"
    }
  }
]
const router=new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title
  next()
})
export default router
