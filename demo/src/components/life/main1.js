/*
 * @Author: 
 * @Date: 2021-07-12 16:39:27
 * @LastEditTime: 2021-07-13 10:23:20
 * @LastEditors: Please set LastEditors
 * @Description:  生命周期
 * 
 * constructor函数:组件被创建时,就会调用
 * render函数:渲染组件的时候,就会调用
 * componentDidMount函数:组件已经发生了更新时,就会回调
 * componentDidUpdate函数:组件已经发生了更新时,就会回调
 * componentWillUnmount汉化:组件即将被移除时,就会回调
 */
import { Component } from 'react';
class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>儿子</div>
    );
  }
}

class Main1 extends Component {
  // 构造器的作用:
  // 1通过props接收父组件传递过来的数据
  // 2通过this.state为事件绑定实例
  // 3给方法绑定this
  // this.btnClick.bind(this)
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    console.log("挂载时-constructor");
  }
  // 静态方法 在初始化和更新的时候都会被调用
  static getDerivedStateFromProps (props, state) {
    console.log('挂载或者更新时-getDerivedSateFromProps');
    console.log(props, state);
    // 该方法必须有返回值
    // 可以将prop映射在state中
    return props;
  }
  // render的作用:
  // 返回组件的网页结构
  render () {
    if (this.state.count === 0) {
      console.log("更新时-render");
    } else {
      console.log("挂载时-render");
    }
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => {
          this.btnClick()
        }}>点我改变</button>
        <p>
          {this.state.name}
        </p>
        <p>{this.state.age}
        </p>
      </div>
    );
  }
  btnClick () {
    this.setState({
      count: 0,
      age:189128
    })
  }
  // componentDidMount在生命周期方法中做什么
  // 1.依赖DOM的操作可以在这里进行
  // 2.再次发送网络请求的最好地方(官方建议)
  // 3.可以在此处添加一些订阅(会在componentWillUnmount取消订阅)
  componentDidMount () {
    console.log("挂载时-componentDidMount");
  }
  static shouldComponentUpdate(props,state){
    console.log("是否会更新UI-shouldComponentUpdate");
    return true;
  }
  // componentDidUpdate作用
  // 更新之后对组件进行操作
  componentDidUpdate () {
    console.log("更新时-componentDidUpdate");
  }
  // componentWillUnmount作用
  // 执行必要的清理
  // 清理定时器,取消网络请求或移除,清除缓存
  componentWillUnmount () {
    console.log("卸载时-componentWillUnmount");
  }
}

export default Main1;
