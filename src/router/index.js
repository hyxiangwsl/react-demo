/*
 * @Author: 
 * @Date: 2021-07-14 11:09:55
 * @LastEditTime: 2021-07-14 14:32:03
 * @LastEditors: Please set LastEditors
 * @Description:  管理路由地址的
 */
import Home from '../components/router/home'
import About from '../components/router/about'
import He from '../components/router/he';
import Me from '../components/router/me';
const routers = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    // 要嵌套路由的话 外层路由就不需要精准定位
    // exact: true,
    component: About,
    // 子路由
    routes:[
      {
        path: "/about/me",
        exact: true,
        component: Me
      },
      {
        path: "/about/he",
        exact: true,
        component: He
      },
    ]
  },
]

export default routers;