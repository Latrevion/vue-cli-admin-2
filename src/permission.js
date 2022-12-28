import router from './router'
import { Notification } from 'element-ui'
import  NProgress  from 'nprogress'
NProgress.configure({showSpinner:false})

const needLoginRouter =[]

router.beforeEach((to,from,next)=>{
    const hasToken=localStorage.getItem('token')
    NProgress.start()
    if(hasToken){
        next()
    }else{
        if(needLoginRouter.indexOf(to.path)!==-1){
            next()
        }else{
            Notification.warning('请先登录')
            next('/login?redirect='${to.path})
            NProgress.done()
        }
    }
    next()
})

router.afterEach((to,from)=>{
    NProgress.done()
})