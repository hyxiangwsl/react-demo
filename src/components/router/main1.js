/*
 * @Author: 
 * @Date: 2021-07-14 11:01:40
 * @LastEditTime: 2021-07-14 14:22:57
 * @LastEditors: Please set LastEditors
 * @Description:  路由的集中管理
 */
// 1.要安装 react-router-config 及router库 react-router-dom
import { Component } from 'react'
// 2. 导入renderRoutes
import { renderRoutes } from 'react-router-config';
import { withRouter,NavLink } from 'react-router-dom';
// 3. 导入路由文件
import routers from '../../router/index';
//4. 最后一步 要在main组件的地方 加上BrowserRouter 表示 这个是路由视图
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        <NavLink to={'/home'} activeStyle={{color:"red"}}>Home</NavLink>
        <NavLink to={'/about'} activeStyle={{color:"red"}}>about</NavLink>
        <button onClick={() => { this.btnClick() }}>点击转换about路由</button>
        <div>
          {/* 路由视图转换的地方 */}
          {renderRoutes(routers)}
        </div>
      </div>
    );
  }
  btnClick () {
    // 使用js形式路由跳转
    this.props.history.push('/about')
  }
}


export default withRouter(Main);