/*
 * @Author: 
 * @Date: 2021-06-15 20:15:24
 * @LastEditTime: 2021-06-30 16:05:08
 * @LastEditors: Please set LastEditors
 * @Description:  兄弟之间的通信
 * 
 * 兄弟之间通过传递数据给父亲 再传递给另一个兄弟
 */
import React from 'react';

class A extends React.Component {
  constructor(props) {
    super(props);
    //拿到爸爸传递的数据 props里面
    this.state = {}
  }
  render () {
    return (
      <div>
        我是兄弟A
        <button onClick={() => { this.aClick() }}>兄弟A点击事件</button>
      </div>
    );
  }
  aClick () {
    this.props.aFn("我从A传递过去的数据嘤嘤嘤");
  }
}
class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div>
        我是兄弟B
        <p>{this.props.msg}</p>
      </div>
    );
  }
}


class Main3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aData:""
    }
  }
  render () {
    return (
      <div>我是main3
        {/* A传递数据给B */}
        <A aFn={this.myFun} />
        {/* 从爸爸数据传递给B */}
        <B msg={this.state.aData}/>
      </div>
    );
  }
  myFun = (name) => {
    console.log("父亲接收到的", name);
    this.setState({
      aData:name
    })
  }
}

export default Main3;
