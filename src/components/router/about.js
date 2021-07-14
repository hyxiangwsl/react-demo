/*
 * @Author: 
 * @Date: 2021-07-14 11:14:36
 * @LastEditTime: 2021-07-14 14:27:55
 * @LastEditors: Please set LastEditors
 * @Description:  
 */
import { renderRoutes } from 'react-router-config';
import { withRouter, NavLink } from 'react-router-dom';
import { Component } from 'react';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>about'

        <NavLink to={'/about/me'} activeStyle={{ color: "red" }}>me</NavLink>
        <NavLink to={'/about/he'} activeStyle={{ color: "red" }}>he</NavLink>
        <div>
          {/* 路由视图转换的地方 */}
          {renderRoutes(this.props.route.routes)}
        </div>

      </div>
    );
  }
  componentDidMount () {
    // 获取到当前的路由对象
    console.log(this.props.route);
  }
}

export default About;