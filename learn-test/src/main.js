import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import _ from 'lodash';

Vue.prototype._=_
Vue.config.productionTip = false
Vue.use(Element)
// 修改路由跳转报错的bug--end
if (process.env.NODE_ENV === "development") {
  const { mockXHR } = require("../mock")
  mockXHR()
}

new Vue({
  render: h => h(App),
}).$mount('#app')
