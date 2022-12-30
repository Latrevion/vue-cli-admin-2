import axios from "axios";
import { Message } from "element-ui";
import router from "@/router";

const service = axios.create({
  timeout: 5000,
});

//添加请求拦截器
service.interceptors.request.use(
    (config) => {
  if (localStorage.getItem("token")) {
    config.headers["token"] = localStorage.getItem("token");
  }
  if (config.method === "post") {
    config.headers["Content-Type"] = "application/json";
  }
  if(config.data instanceof FormData){
    config.headers={
        'Content-Type':'multipart/form-data',
        'token':localStorage.getItem("token")
    }
  }
  return config;
},
error =>{
    console.log(error)
    return Promise.reject(error)
});

//count用于记录请求次数
let count = 0;
//添加响应拦截器
service.interceptors.response.use(
response=>{
    const res = response.data;
    if(res.code!==20000){
        if(res.code===30001){
            if(count===0){
                Message({
                    message:'登录超时，请重新登录',
                    type:'error',
                })
            }
            localStorage.removeItem('token')
            router.push({path:'/login',query:{path:router.currentRoute.fullPath}})
//       router.push({path:'/login',query:{path:router.currentRoute.fullPath}})
// router.push({path:'/login',query:{path:router.currentRoute.fullPath}}) 是 Vue Router 中用于跳转到新路由的方法。
// router 是 Vue Router 实例，push 方法是 Router 实例的一个方法，用于将新的路由推送到路由堆栈中。
// {path:'/login',query:{path:router.currentRoute.fullPath}} 是一个对象，表示要跳转的新路由的路径和查询参数。
// path 是路径，表示要跳转到的新路由的路径。在这个例子中，路径为 '/login'，表示要跳转到 '/login' 这个路径。
// query 是查询参数，表示新路由的查询参数。在这个例子中，查询参数是 {path:router.currentRoute.fullPath}，其中 path 是参数的名称，router.currentRoute.fullPath 是参数的值，表示当前路由的完整路径。
// 因此，router.push({path:'/login',query:{path:router.currentRoute.fullPath}}) 这行代码的作用是将新的路由 '/login' 和查询参数 {path:router.currentRoute.fullPath} 推送到路由堆栈中，从而跳转到新的路由 '/login'。
        }
        count++
        return Promise.reject(res)
    }else{
        return res
    }
},
error=>{
    if(count ===0){
        if(error.response.data.code==='30001'){
            Message({
                message:'登录超时，请重新登录',
                type:'error',
                duration:5*1000
            })
            count =0
            localStorage.removeItem('token')
            router.push({path:'/login',query:{path:router.currentRoute.fullPath}})
        }else{
            Message({
                message:error.message,
                type:'error',
                duration:5*1000
            })
        }
    }
    count++
    return Promise.reject(error)
}
)


export default service;