/*
 * @Author: 
 * @Date: 2021-07-13 15:02:15
 * @LastEditTime: 2021-07-13 15:36:28
 * @LastEditors: Please set LastEditors
 * @Description:  ref获取组件
 */
import { Component, createRef, forwardRef } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>home</div>
    );
  }
}

// function About () {
//   return (
//     <div>
//       <p>about</p>
//       <div>aboutdiv</div>
//     </div>
//   )
// }
// 函数组件通过forwardRef获取
// myref 相当于外部传入的this.refFun
const About  = forwardRef(function(props,myref) {
  return (
    <div ref={myref}>
      <p>about</p>
      <div>aboutdiv</div>
    </div>
  )
})

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.refClass = createRef();
    this.refFun = createRef();
  }
  render () {
    return (
      <div>
        {/* 类组件 
            获取到类组件的实例的对象
        */}
        <Home ref={this.refClass}></Home>
        {/* 函数组件 
            函数组件的ref为null
        */}
        <About ref={this.refFun}></About>
        <button onClick={() => { this.doClick() }}>俺妞妞</button>
      </div>
    );
  }
  doClick () {
    console.log("类组件的ref", this.refClass.current);
    console.log("函数组件的ref", this.refFun.current);
  }
}

export default Main;
