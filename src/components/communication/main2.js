/*
 * @Author: 
 * @Date: 2021-06-07 16:55:41
 * @LastEditTime: 2021-06-15 19:01:23
 * @LastEditors: Please set LastEditors
 * @Description:  跨组件通信
 */
// 跨组件通信方式:
// 1.层层传递 向上传递 使用属性
import React from 'react';
class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>我是爸爸
        <Son name={this.props.name} appFn={this.props.appFn}/>
      </div>
    );
  }
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>我是儿子
        <p>传过来的数据-{this.props.name}</p>
        <button onClick={()=>{this.btnClick()}}>儿子点击按钮</button>
      </div>
    );
  }
  btnClick(){
    this.props.appFn(18);
  }
}


class Main2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        我是爷爷
        <Father name={"汪苏泷"}  appFn={this.myFun}/>
      </div>

    );
  }
  // 往下传数据
  myFun = (age) => {
    console.log("myfun触发了",age);
  }
}

export default Main2;