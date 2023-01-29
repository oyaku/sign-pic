import Sign from './components/Sign'
import _Vue from 'vue'

// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('sign', Sign)
}
// 这样就可以使用Vue.use进行全局安装了。
Sign.install = function (Vue) {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Sign.name, Sign)
}

/*
// 导出 install 函数
// Vue.use() 会调用这个函数
const install = function (Vue) {
  Object.keys(msign).forEach((key) => {
    console.log(key, msign[key])
    Vue.component(key, msign[key])
  })
}

// 自动安装 方便打包成压缩文件, 用<script scr=''></script>的方式引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
*/

// 把模块导出
export default Sign