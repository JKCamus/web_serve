import Vue from 'vue'
import VueRouter from 'vue-router';

const WebGl=()=>import ('views/webGL')
const Parent=()=>import ('views/$attrs_test/Parent')
const dynamicComponent=()=>import('views/is-components')
const Lodash=()=>import('views/learn_lodash/basic')
const Charts=()=>import('views/echart/line')
const RequestTest=()=>import('views/RequestTest/request-test')

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
    path:'/dynamicComponent',
    component:dynamicComponent,
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
  },
  {
    path:'/charts',
    component:Charts,
    meta:{
      title:"chart"
    }
  },
  {
    path:'/request-test',
    component:RequestTest,
    meta:{
      title:"request-test"
    }
  },
  {
    path:'/test-proxy',
    component:()=>import('views/proxy-img'),
    meta:{
      title:"test-proxy"
    }
  },
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
