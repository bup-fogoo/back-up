import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import store from './store/index'
import Message from './common/TMessage/TMessage'
import './common/TMessage/TMessage.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'
import '../src/assets/styles/global.css'

Vue.config.productionTip = false
// 挂载到全局,TMessage
Vue.prototype.$message = Message
Vue.use(Vuex)
fastclick.attach(document.body)

new Vue({
    el: '#app',
    store,
    router,
    render: (h) => h(App),
})
