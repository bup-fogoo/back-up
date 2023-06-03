import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            // component: Home //采用了懒加载
            component: () => import('@/pages/home/Home')

        }, {
            path: '/video/:id',
            name: 'Channel',
            component: () => import('@/pages/channel/Channel')
        }, {
            path: '/test',
            name: 'test',
            component: () => import('@/common/Test')
        }, {
            path: '/register',
            name: 'Register',
            component: () => import('@/pages/home/components/user/Register')
        }, {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/home/components/user/Login')
        }, {
            path: '/profile',
            name: 'Profile',
            // meta: {
            //   auth: true
            // },
            component: () => import('@/pages/info/Profile')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        // 这里还要判断token的有效性比如有没有过期需要后台发放token的时候带上token的有效期,如果token无效需要请求token
        if (localStorage.getItem('aikan_user_token') !== null && localStorage.getItem('aikan_user_info') !== null &&
            localStorage.getItem('aikan_user_token') !== '' && localStorage.getItem('aikan_user_info') !== '') {
            next()
        } else {
            // 回到登入页面
            router.push('/login')
        }
    } else {
        next()
    }
})

export default router
