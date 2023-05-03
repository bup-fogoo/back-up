import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import Message from './common/TMessage/TMessage'
import './common/TMessage/TMessage.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'
// import '../src/assets/styles/iconfont.css'

//muiplayder
import muiVideo from '@/common/MuiPlayer'

const cmsComponents = {
    install: function (Vue) {
        Vue.component('muiVideo', muiVideo)
    }
}

Vue.config.productionTip = false
// 挂载到全局,TMessage
Vue.prototype.$message = Message

fastclick.attach(document.body)

new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
})
