/*
 * @Author: 
 * @Date: 2021-06-01 20:51:43
 * @LastEditTime: 2021-06-07 18:38:45
 * @LastEditors: Please set LastEditors
 * @Description:  
 */
import React from 'react';
import ReactTypes from "prop-types";
import "./header.css"
class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.props =  props;
    this.state = {}
  }
  render () {
    console.log("this.props",this.props);
    return (
    <div className="header">
      我是header
    </div>
    );
  }
  // 创建子组件属性的初始值
  static defaultProps = {
    name:"陈凯哥",
    age:70,
  }
  //属性类型 通过propTypes prop-types
  static propTypes = {
    name:ReactTypes.string,
    age:ReactTypes.number
  }
}

export default Header;